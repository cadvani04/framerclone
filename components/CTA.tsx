'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Script from 'next/script'

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), opacity }}
        className="absolute top-20 left-1/4 w-48 h-48 bg-blue-50 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]), opacity }}
        className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-50 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          style={{ scale, opacity }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-12"
          >
            Ready to scale?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 30-minute strategy session
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              💰 Free • No commitment • Real results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <div style={{width:"100%",height:"600px",overflow:"scroll"}} id="my-cal-inline-30min"></div>
          </motion.div>
        </motion.div>
      </div>

      <Script id="cal-embed" strategy="afterInteractive">
        {`
          (function (C, A, L) { 
            let p = function (a, ar) { a.q.push(ar); }; 
            let d = C.document; 
            C.Cal = C.Cal || function () { 
              let cal = C.Cal; 
              let ar = arguments; 
              if (!cal.loaded) { 
                cal.ns = {}; 
                cal.q = cal.q || []; 
                d.head.appendChild(d.createElement("script")).src = A; 
                cal.loaded = true; 
              } 
              if (ar[0] === L) { 
                const api = function () { p(api, arguments); }; 
                const namespace = ar[1]; 
                api.q = api.q || []; 
                if(typeof namespace === "string"){
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ["initNamespace", namespace]);
                } else p(cal, ar); 
                return;
              } 
              p(cal, ar); 
            }; 
          })(window, "https://app.cal.com/embed/embed.js", "init");
          
          Cal("init", "30min", {origin:"https://app.cal.com"});

          Cal.ns["30min"]("inline", {
            elementOrSelector:"#my-cal-inline-30min",
            config: {"layout":"month_view"},
            calLink: "xvanitee/30min",
          });

          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}
      </Script>
    </section>
  )
}

export default CTA 