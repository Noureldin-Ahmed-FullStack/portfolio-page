import React, { useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function Reveal({ children ,...props}) {
    const ref = useRef(null)
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView,mainControls,slideControls])

    return (
        <div ref={ref} className={`${(props.width === 'full')? 'w-100':'fitContent'} position-relative`}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
            }
            }
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { top: 0 },
                    visible: { top: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: "3px",
                    background: "var(--brand)",
                    zIndex: 20,
                }}
            />
        </div >
    )
}
