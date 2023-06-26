'use client'
import { useScroll, useTransform, motion } from "framer-motion"
import React, { useEffect, useRef } from "react"
// import { GithubIcon} from '../components/icons/github'


export const Hero = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const position = useTransform(scrollYProgress, pos =>
    pos >= 1 ? "relative" : "fixed"
  )

  useEffect(() => {
    const updateMousePosition = ev => {
      if (!targetRef.current) return
      const { clientX, clientY } = ev
      targetRef.current.style.setProperty("--x", `${clientX}px`)
      targetRef.current.style.setProperty("--y", `${clientY}px`)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.section
    style={{ opacity }}
    ref={targetRef}
    className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ position, scale, x: "-50%" }}
        className="fixed pt-40 left-1/2 "
      >
       <h3 className="capitalize font-semibold text-6xl text-center">
       Welcome to Kingship Technologies, your premier destination for cutting-edge cybersecurity training
       </h3>
      </motion.div>
    </motion.section>
  )
}

export default Hero