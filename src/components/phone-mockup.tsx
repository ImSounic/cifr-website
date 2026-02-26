export function PhoneMockup() {
  return (
    <div className="animate-float">
      <div className="relative mx-auto w-[280px] h-[580px]">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-blue/20 rounded-[3.5rem] blur-2xl" />

        {/* Phone frame — hardcoded dark so it stays dark in both themes */}
        <div className="relative w-full h-full rounded-[2.5rem] p-3 shadow-2xl" style={{ backgroundColor: "#151A2C" }}>
          {/* Screen — always light theme app preview */}
          <div className="w-full h-full rounded-[2rem] overflow-hidden flex flex-col" style={{ backgroundColor: "#F4F3EE" }}>
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <span className="text-[10px] font-body" style={{ color: "#9B9A95" }}>9:41</span>
              <div className="w-20 h-5 rounded-full" style={{ backgroundColor: "#151A2C" }} />
              <div className="flex gap-1">
                <div className="w-3 h-2 rounded-sm" style={{ backgroundColor: "#9B9A9580" }} />
                <div className="w-3 h-2 rounded-sm" style={{ backgroundColor: "#9B9A9580" }} />
              </div>
            </div>

            {/* App content */}
            <div className="flex-1 px-5 pt-3 pb-4 flex flex-col">
              {/* App header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] font-body" style={{ color: "#9B9A95" }}>Good morning</p>
                  <p className="text-sm font-display" style={{ color: "#151A2C" }}>Your Chores</p>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#586AAF1A" }}>
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#586AAF4D" }} />
                </div>
              </div>

              {/* Progress */}
              <div className="rounded-xl p-3 mb-3 shadow-sm" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-body" style={{ color: "#9B9A95" }}>This week</span>
                  <span className="text-[10px] font-medium font-body" style={{ color: "#586AAF" }}>3/5 done</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#ECEAE3" }}>
                  <div className="w-3/5 h-full rounded-full" style={{ backgroundColor: "#586AAF" }} />
                </div>
              </div>

              {/* Chore cards */}
              <div className="space-y-2 flex-1">
                <div className="rounded-xl p-3 shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E0D830" }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs" style={{ backgroundColor: "#586AAF1A" }}>
                      🍽️
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium font-body" style={{ color: "#151A2C" }}>Dishes</p>
                      <p className="text-[9px] font-body" style={{ color: "#9B9A95" }}>Today, 6:00 PM</p>
                    </div>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#586AAF", borderColor: "#586AAF", borderWidth: 2 }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-3 shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E0D830" }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs" style={{ backgroundColor: "#586AAF1A" }}>
                      🧹
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium font-body" style={{ color: "#151A2C" }}>Vacuum living room</p>
                      <p className="text-[9px] font-body" style={{ color: "#9B9A95" }}>Tomorrow, 11:00 AM</p>
                    </div>
                    <div className="w-4 h-4 rounded-full" style={{ border: "2px solid #E2E0D8" }} />
                  </div>
                </div>

                <div className="rounded-xl p-3 shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E0D830" }}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs" style={{ backgroundColor: "#586AAF1A" }}>
                      🗑️
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium font-body" style={{ color: "#151A2C" }}>Take out trash</p>
                      <p className="text-[9px] font-body" style={{ color: "#9B9A95" }}>Wed, 8:00 AM</p>
                    </div>
                    <div className="w-4 h-4 rounded-full" style={{ border: "2px solid #E2E0D8" }} />
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="flex justify-around pt-3 mt-2" style={{ borderTop: "1px solid #E2E0D880" }}>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#586AAF33" }} />
                  <span className="text-[8px] font-body" style={{ color: "#586AAF" }}>Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#9B9A9533" }} />
                  <span className="text-[8px] font-body" style={{ color: "#9B9A95" }}>Calendar</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#9B9A9533" }} />
                  <span className="text-[8px] font-body" style={{ color: "#9B9A95" }}>House</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#9B9A9533" }} />
                  <span className="text-[8px] font-body" style={{ color: "#9B9A95" }}>Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
