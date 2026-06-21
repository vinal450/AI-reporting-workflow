import { motion, Variants } from 'motion/react';
import { 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Presentation, 
  BarChart3,
  IndianRupee,
  Activity,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

const reportData = {
  summary: [
    "The organization generated ₹56.93M in total revenue from 987 closed deals across four regions, supported by a ₹7.27M marketing spend.",
    "The West region represents the strongest performance, contributing the highest revenue (₹17.85M) and achieving the lowest Cost Per Acquisition (CPA) of ₹5,951.",
    "The North region shows the lowest conversion rate at 4.23% and the highest CPA of ₹9,178, representing a key area of operational inefficiency.",
    "The portfolio achieved an average lead conversion rate of 5.34% and an overall win rate of 15.63%.",
    "Reallocating marketing budgets from lower-performing regions to high-efficiency regions like the West could improve overall portfolio profitability."
  ],
  kpis: [
    { label: "Total Revenue", value: "₹56.93M", icon: IndianRupee },
    { label: "Total Deals Closed", value: "987", icon: Layers },
    { label: "Avg Conversion Rate", value: "5.34%", icon: Activity },
    { label: "Avg CPA", value: "₹7,363", icon: BarChart3 },
    { label: "Peak Win Rate (West)", value: "25.00%", icon: TrendingUp },
  ],
  trends: [
    { title: "High Efficiency in West Region", description: "The West region leads in volume and efficiency, generating the most revenue (₹17.85M) with the lowest marketing spend (₹1.77M)." },
    { title: "Balanced Lead Volume", description: "Lead generation is relatively stable across all regions, ranging between 4,486 (East) and 4,724 (North), indicating a consistent top-of-funnel reach." },
    { title: "Solid Regional Win Rates", description: "The South (20.83%) and North (20.00%) regions maintain stable win rates, suggesting that qualified opportunities are handled reasonably well." }
  ],
  risks: [
    { title: "Underperformance in North Region", description: "The North region requires the highest CPA (₹9,178) while returning the lowest conversion rate (4.23%) and lowest revenue (₹10.99M)." },
    { title: "Data Inconsistency", description: "The dataset indicates ₹0 for Cost/Lead across all regions, despite having documented marketing spend and leads generated, which suggests a tracking or system integration issue." },
    { title: "Potential Underfunding of West", description: "The West region achieves the highest ROI but received the lowest marketing spend (₹1.77M), suggesting missed revenue opportunities." }
  ],
  recommendations: [
    { title: "Budget Reallocation", description: "Shift a portion of marketing funds from the underperforming North region to the high-converting West region to improve overall customer acquisition costs." },
    { title: "Process Standardization", description: "Document and transfer sales techniques from the West region (25.00% win rate) to the East region (17.65% win rate) to boost closing efficiency." },
    { title: "Data Quality Remediation", description: "Investigate the marketing attribution systems to resolve why Cost per Lead is recorded as zero, ensuring better unit-economic visibility." }
  ],
  presentation: [
    { slide: "01", title: "Executive Summary & Overview", description: "Revenue, total deals, and high-level regional findings." },
    { slide: "02", title: "Regional Performance Comparison", description: "Revenue, conversions, and deal volumes by region." },
    { slide: "03", title: "Marketing & Acquisition Efficiency", description: "Deep-dive into CPA, marketing spend allocation, and spend-to-revenue ratios." },
    { slide: "04", title: "Strategic Risks & Inefficiencies", description: "Analysis of the North region's performance and data-tracking gaps." },
    { slide: "05", title: "Strategic Recommendations", description: "Proposed budget adjustments, cross-regional training, and operational next steps." }
  ],
  assumptions: [
    { label: "Assumptions", text: "It is assumed that marketing spend is fully attributed to the leads and deals recorded within the same period, and that the data provided in the pivot summary is mathematically correct." },
    { label: "Limitations", text: "Crucial fields mentioned in the context—such as Date, Lead Source, Demo Calls, and Sales Hours Spent—were absent from the provided summary data, preventing time-series, lead-channel, or productivity analysis. Cost/Lead was populated as ₹0, limiting unit-level economic assessments." }
  ]
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-slate-200">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">Business Analysis Report</h1>
            <p className="text-sm text-slate-500 font-medium">Q3 Performance & Strategic Findings</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Report Generated
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* KPI Grid */}
        <motion.section 
          initial="hidden" animate="visible" variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {reportData.kpis.map((kpi, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <kpi.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                <p className="text-2xl font-semibold text-slate-900 mt-0.5">{kpi.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Exec Summary */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Executive Summary</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm leading-relaxed text-slate-700 text-lg">
            <ul className="space-y-4">
              {reportData.summary.map((point, index) => (
                <motion.li key={index} variants={itemVariants} className="flex gap-4">
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>
                  </div>
                  <p>{point}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Trends & Risks */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Positive Trends</h2>
            </div>
            <div className="space-y-4">
              {reportData.trends.map((trend, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{trend.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{trend.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Risks & Red Flags</h2>
            </div>
            <div className="space-y-4">
              {reportData.risks.map((risk, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{risk.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Recommendations */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Strategic Recommendations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reportData.recommendations.map((rec, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-indigo-900 text-white p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="text-indigo-300 font-mono text-sm mb-4">ACTION {i + 1}</div>
                  <h3 className="text-xl font-semibold mb-3">{rec.title}</h3>
                  <p className="text-indigo-100/80 leading-relaxed">{rec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Presentation Structure */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Presentation className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Presentation Structure</h2>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            {reportData.presentation.map((slide, i) => (
              <motion.div key={i} variants={itemVariants} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-16 text-slate-300 font-mono text-3xl font-light">
                  {slide.slide}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900">{slide.title}</h3>
                  <p className="text-slate-600 mt-1">{slide.description}</p>
                </div>
                <div className="flex-shrink-0 text-slate-400">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Assumptions */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="pt-8 mb-8 border-t border-slate-200">
          <div className="flex items-start gap-4 text-slate-500 text-sm bg-slate-100/50 p-6 rounded-2xl">
            <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="space-y-4">
              {reportData.assumptions.map((item, i) => (
                <div key={i}>
                  <strong className="text-slate-700 font-semibold block mb-1">{item.label}</strong>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
