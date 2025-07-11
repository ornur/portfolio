"use client"

import type React from "react"

import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion"
import { Children, createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Constants
const DOCK_HEIGHT = 128
const DEFAULT_MAGNIFICATION = 80
const DEFAULT_DISTANCE = 150
const DEFAULT_PANEL_HEIGHT = 64

// Types
interface DockProps {
  children: React.ReactNode
  className?: string
  distance?: number
  panelHeight?: number
  magnification?: number
  spring?: SpringOptions
}

interface DockItemProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

interface DockLabelProps {
  className?: string
  children: React.ReactNode
}

interface DockIconProps {
  className?: string
  children: React.ReactNode
}

interface DockContextValue {
  mouseX: MotionValue
  spring: SpringOptions
  magnification: number
  distance: number
}

// Context
const DockContext = createContext<DockContextValue | undefined>(undefined)

function useDockContext() {
  const context = useContext(DockContext)
  if (!context) {
    throw new Error("useDockContext must be used within a Dock component")
  }
  return context
}

// Main Dock Component
function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  const isHovered = useMotionValue(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + magnification / 2 + 4)
  }, [magnification])

  const heightTransform = useTransform(isHovered, [0, 1], [panelHeight, maxHeight])
  const animatedHeight = useSpring(heightTransform, spring)

  const contextValue = useMemo(
    () => ({
      mouseX,
      spring,
      distance,
      magnification,
    }),
    [mouseX, spring, distance, magnification],
  )

  // SSR fallback
  if (!isMounted) {
    return (
      <div
        style={{
          height: panelHeight,
          scrollbarWidth: "none",
        }}
        className="mx-2 flex max-w-full items-end overflow-x-auto"
      >
        <div
          className={cn("mx-auto flex w-fit gap-4 rounded-2xl bg-gray-100 px-4 dark:bg-neutral-900", className)}
          style={{ height: panelHeight }}
          role="toolbar"
          aria-label="Application dock"
        >
          {children}
        </div>
      </div>
    )
  }

  const handleMouseMove = ({ pageX }: React.MouseEvent) => {
    isHovered.set(1)
    mouseX.set(pageX)
  }

  const handleMouseLeave = () => {
    isHovered.set(0)
    mouseX.set(Number.POSITIVE_INFINITY)
  }

  return (
    <motion.div
      style={{
        height: animatedHeight,
        scrollbarWidth: "none",
      }}
      className="mx-2 flex max-w-full items-end overflow-x-auto"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("mx-auto flex w-fit gap-4 rounded-2xl bg-gray-100 px-4 dark:bg-neutral-900", className)}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockContext.Provider value={contextValue}>{children}</DockContext.Provider>
      </motion.div>
    </motion.div>
  )
}

// Dock Item Component
function DockItem({ children, className, onClick }: DockItemProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const isHovered = useMotionValue(0)

  const dockContext = useContext(DockContext)
  const { distance = DEFAULT_DISTANCE, magnification = DEFAULT_MAGNIFICATION, mouseX, spring } = dockContext || {}

  // Always call hooks with safe fallbacks
  const safeMouseX = mouseX || useMotionValue(Number.POSITIVE_INFINITY)
  const safeSpring = spring || { mass: 0.1, stiffness: 150, damping: 12 }

  const mouseDistance = useTransform(safeMouseX, (value: number) => {
    if (!isMounted || !elementRef.current) return 0
    const bounds = elementRef.current.getBoundingClientRect()
    return value - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(mouseDistance, [-distance, 0, distance], [40, magnification, 40])

  const animatedWidth = useSpring(widthTransform, safeSpring)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // SSR fallback or when context is unavailable
  if (!isMounted || !dockContext) {
    return (
      <div
        ref={elementRef}
        style={{ width: 40 }}
        onClick={onClick}
        className={cn("relative inline-flex items-center justify-center", className)}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
      >
        {Children.map(children, (child) => (typeof child === "function" ? null : child))}
      </div>
    )
  }

  const handleHoverStart = () => isHovered.set(1)
  const handleHoverEnd = () => isHovered.set(0)

  return (
    <motion.div
      ref={elementRef}
      style={{ width: animatedWidth }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onFocus={handleHoverStart}
      onBlur={handleHoverEnd}
      onClick={onClick}
      className={cn("relative inline-flex items-center justify-center", className)}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        typeof child === "function"
          ? (child as (props: { width: MotionValue<number>; isHovered: MotionValue<number> }) => React.ReactNode)({
            width: animatedWidth,
            isHovered,
          })
          : child,
      )}
    </motion.div>
  )
}

// Dock Label Component
function DockLabel({ children, className, ...restProps }: DockLabelProps & Record<string, unknown>) {
  const isHovered = restProps["isHovered"] as MotionValue<number>
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !isHovered) return

    const unsubscribe = isHovered.on("change", (value) => {
      setIsVisible(value === 1)
    })

    return unsubscribe
  }, [isHovered, isMounted])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white",
            className,
          )}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Dock Icon Component
function DockIcon({ children, className, ...restProps }: DockIconProps & Record<string, unknown>) {
  const width = restProps["width"] as MotionValue<number> | undefined
  const fallbackWidth = useMotionValue(40)
  const effectiveWidth = width ?? fallbackWidth
  const iconSize = useTransform(effectiveWidth, (value) => value / 2)

  return (
    <motion.div style={{ width: iconSize }} className={cn("flex items-center justify-center", className)}>
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon, DockItem, DockLabel }
