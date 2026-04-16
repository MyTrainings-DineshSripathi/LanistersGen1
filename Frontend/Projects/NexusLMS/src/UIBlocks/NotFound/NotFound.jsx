import React from 'react'
import { useNavigate } from 'react-router'
import { LayoutDashboard, Search, BookOpen, Calendar, HelpCircle } from 'lucide-react'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen w-full overflow-auto relative flex items-center justify-center"
      style={{ backgroundColor: '#0f172a', fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes drift { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, -15px) rotate(5deg); } 50% { transform: translate(-5px, -25px) rotate(-3deg); } 75% { transform: translate(-15px, -10px) rotate(2deg); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shake { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-8deg); } 75% { transform: rotate(8deg); } }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .drift-1 { animation: drift 6s ease-in-out infinite; }
        .drift-2 { animation: drift 8s ease-in-out infinite 1s; }
        .drift-3 { animation: drift 7s ease-in-out infinite 2s; }
        .drift-4 { animation: drift 9s ease-in-out infinite 0.5s; }
        .drift-5 { animation: drift 5s ease-in-out infinite 1.5s; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .slide-up-1 { animation: slide-up 0.6s ease-out 0.2s both; }
        .slide-up-2 { animation: slide-up 0.6s ease-out 0.4s both; }
        .slide-up-3 { animation: slide-up 0.6s ease-out 0.6s both; }
        .slide-up-4 { animation: slide-up 0.6s ease-out 0.8s both; }
        .shake-hover:hover { animation: shake 0.4s ease-in-out; }
        .btn-main { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .btn-main:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 12px 30px -8px rgba(0,0,0,0.3); }
        .grid-bg { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none grid-bg" aria-hidden="true">
        <div className="drift-1 absolute top-[10%] left-[8%] text-4xl opacity-30">📚</div>
        <div className="drift-2 absolute top-[20%] right-[12%] text-3xl opacity-25">🎓</div>
        <div className="drift-3 absolute bottom-[25%] left-[15%] text-3xl opacity-20">📝</div>
        <div className="drift-4 absolute top-[60%] right-[8%] text-4xl opacity-25">🔬</div>
        <div className="drift-5 absolute bottom-[15%] right-[30%] text-2xl opacity-20">📐</div>
        <div className="drift-2 absolute top-[40%] left-[5%] text-2xl opacity-15">💡</div>
        <div className="drift-4 absolute top-[8%] left-[50%] text-3xl opacity-20">🧪</div>
        <div className="pulse-glow absolute top-[15%] right-[20%] w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)' }} />
        <div className="pulse-glow absolute bottom-[20%] left-[10%] w-56 h-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)', animationDelay: '1.5s' }} />
      </div>

      <main className="relative z-10 text-center px-6 mx-auto w-full max-w-[min(92vw,780px)]">
        <div className="slide-up-1 float-anim mx-auto mb-8 inline-flex h-[clamp(120px,16vw,180px)] w-[clamp(120px,16vw,180px)] items-center justify-center rounded-4xl bg-slate-900 shadow-[0_35px_120px_-40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:shadow-[0_35px_160px_-40px_rgba(249,115,22,0.35)] shake-hover">
          <div className="inline-flex h-full w-full items-center justify-center">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <rect x="10" y="15" width="100" height="75" rx="6" fill="#1e293b" stroke="#f97316" strokeWidth="3" />
              <rect x="18" y="23" width="84" height="59" rx="3" fill="#0f172a" />
              <text x="60" y="62" textAnchor="middle" fontFamily="Space Mono, monospace" fontSize="22" fontWeight="700" fill="#f97316">4 🫠 4</text>
              <rect x="45" y="95" width="30" height="6" rx="2" fill="#334155" />
              <rect x="35" y="101" width="50" height="4" rx="2" fill="#334155" />
              <rect x="85" y="80" width="18" height="6" rx="3" fill="#e2e8f0" transform="rotate(-20 94 83)" />
            </svg>
          </div>
        </div>

        <h1 className="slide-up-1 text-[72px] font-bold leading-none tracking-[-2px] text-[#f97316] mb-2">404</h1>
        <h2 className="slide-up-2 text-2xl font-bold text-slate-100 mb-3">Page Not Found</h2>
        <p className="slide-up-3 text-base text-slate-400 leading-7 max-w-md mx-auto mb-9">
          Looks like this lesson doesn't exist in our curriculum. It may have been moved, deleted, or you followed a broken link.
        </p>

        <div className="slide-up-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="btn-main inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-7 py-3 text-sm font-semibold text-[#0f172a]"
          >
            <LayoutDashboard size={18} />
            Back to Dashboard
          </button>
          <button
            onClick={() => navigate('/courses')}
            className="btn-main inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-slate-300"
          >
            <Search size={16} />
            Search Courses
          </button>
        </div>

        <div className="slide-up-4 mt-10 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="inline-flex items-center gap-1 transition-colors hover:text-slate-200"
          >
            <BookOpen size={14} />
            My Courses
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1 transition-colors hover:text-slate-200"
          >
            <Calendar size={14} />
            Schedule
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1 transition-colors hover:text-slate-200"
          >
            <HelpCircle size={14} />
            Help Center
          </button>
        </div>
      </main>
    </div>
  )
}

export default NotFound