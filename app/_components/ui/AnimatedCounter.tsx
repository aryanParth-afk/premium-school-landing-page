"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, useReducedMotion } from 'motion/react';

export default function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  
  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      spring.set(value);
    } else if (shouldReduceMotion) {
      spring.set(value);
    }
  }, [isInView, value, spring, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span>{value}</span>;
  }

  return <motion.span ref={ref}>{display}</motion.span>;
}
