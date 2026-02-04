import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TiltCard from './components/TiltCard';
import { 
  Shield, 
  Lock, 
  Globe, 
  Server, 
  Cpu, 
  Eye, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Database,
  Terminal
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

// Mock Data for Charts
const attackData = [
  { time: '00:00', attacks: 120, blocked: 118 },
  { time: '04:00', attacks: 150, blocked: 149 },
  { time: '08:00', attacks: 450, blocked: 448 },
  { time: '12:00', attacks: 680, blocked: 675 },
  { time: '16:00', attacks: 590, blocked: 588 },
  { time: '20:00', attacks: 320, blocked: 320 },
  { time: '24:00', attacks: 180, blocked: 179 },
];

const threatTypes = [
  { name: 'DDoS', count: 4000 },
  { name: 'Malware', count: 3000 },
  { name: 'Phishing', count: 2000 },
  { name: 'SQL Injection', count: 2780 },
  { name: 'XSS', count: 1890 },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monitor' | 'threats'>('monitor');

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Spline iframe */}
        <div className="absolute inset-0 z-0">
          <iframe 
            src='https://my.spline.design/holographicearthwithdynamiclines-rzV64DsUJSDcS3ZmEBad4sHa/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full opacity-60 pointer-events-auto"
            title="Spline 3D Earth"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 text-sm font-semibold tracking-wide">실시간 위협 모니터링 중</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
            디지털 자산의<br />
            <span className="text-blue-500">철벽 방어 시스템</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexus Security는 최첨단 AI 기술과 글로벌 위협 인텔리전스를 결합하여<br className="hidden md:block"/>
            귀하의 기업을 사이버 공격으로부터 안전하게 보호합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center gap-2">
              <Shield className="w-5 h-5" />
              보안 컨설팅 시작
            </button>
            <button className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-blue-400 rounded-lg font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-2">
              서비스 소개서 다운로드
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">종합 보안 솔루션</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              기업의 규모와 산업 특성에 맞춘 최적화된 보안 전략을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-10 h-10 text-blue-400" />,
                title: "인프라 보안 진단",
                desc: "서버, 네트워크, DB 등 IT 인프라 전반의 취약점을 정밀 분석하고 대응책을 제시합니다."
              },
              {
                icon: <Terminal className="w-10 h-10 text-cyan-400" />,
                title: "모의해킹 (Pentesting)",
                desc: "실제 해커의 공격 시나리오를 기반으로 침투 테스트를 수행하여 잠재적 위협을 사전에 제거합니다."
              },
              {
                icon: <Eye className="w-10 h-10 text-purple-400" />,
                title: "24/7 보안 관제",
                desc: "AI 기반 위협 탐지 시스템을 통해 365일 24시간 실시간으로 이상 징후를 모니터링합니다."
              },
              {
                icon: <Lock className="w-10 h-10 text-indigo-400" />,
                title: "데이터 암호화",
                desc: "중요 정보를 암호화하여 유출 사고 발생 시에도 데이터의 기밀성을 완벽하게 보장합니다."
              },
              {
                icon: <Globe className="w-10 h-10 text-emerald-400" />,
                title: "클라우드 보안",
                desc: "AWS, Azure, GCP 등 클라우드 환경에 최적화된 보안 아키텍처 설계 및 설정을 지원합니다."
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-rose-400" />,
                title: "컴플라이언스 대응",
                desc: "ISMS-P, ISO27001 등 국내외 정보보호 인증 취득을 위한 전문 컨설팅을 제공합니다."
              }
            ].map((service, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
                  <div className="bg-slate-950/50 p-4 rounded-xl w-fit mb-6 border border-slate-700 group-hover:border-blue-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-blue-300 transition-colors">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW SECTION */}
      <section id="stats" className="py-24 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 bg-blue-900/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                실시간 위협 인텔리전스
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Nexus Security의 대시보드는 전 세계에서 수집된 위협 데이터를 실시간으로 시각화하여,
                보안 담당자가 즉각적인 의사결정을 내릴 수 있도록 돕습니다.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer" onClick={() => setActiveTab('monitor')}>
                  <div className={`p-2 rounded-lg ${activeTab === 'monitor' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">트래픽 분석</h5>
                    <p className="text-xs text-slate-400">실시간 패킷 및 공격 차단 현황</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer" onClick={() => setActiveTab('threats')}>
                  <div className={`p-2 rounded-lg ${activeTab === 'threats' ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">공격 유형 분석</h5>
                    <p className="text-xs text-slate-400">주요 보안 위협 카테고리 통계</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 w-full">
              <TiltCard>
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {activeTab === 'monitor' ? (
                        <>
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          실시간 공격 차단 현황
                        </>
                      ) : (
                        <>
                           <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                           탐지된 위협 유형 (최근 24시간)
                        </>
                      )}
                    </h3>
                    <div className="text-xs text-slate-500 font-mono">LIVE UPDATE</div>
                  </div>

                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      {activeTab === 'monitor' ? (
                        <AreaChart data={attackData}>
                          <defs>
                            <linearGradient id="colorAttacks" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="time" stroke="#64748b" />
                          <YAxis stroke="#64748b" />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Area type="monotone" dataKey="attacks" stroke="#ef4444" fillOpacity={1} fill="url(#colorAttacks)" name="공격 시도" />
                          <Area type="monotone" dataKey="blocked" stroke="#3b82f6" fillOpacity={1} fill="url(#colorBlocked)" name="차단됨" />
                        </AreaChart>
                      ) : (
                        <BarChart data={threatTypes} layout="vertical">
                           <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                           <XAxis type="number" stroke="#64748b" />
                           <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} />
                           <Tooltip 
                             cursor={{fill: '#1e293b'}}
                             contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                           />
                           <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} name="탐지 건수" />
                        </BarChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">보안 위협, 지금 진단하세요</h2>
          <p className="text-slate-300 mb-10 text-lg">
            초기 상담은 무료로 진행됩니다. Nexus Security의 전문가 팀이<br/>
            귀사의 보안 상태를 점검하고 맞춤형 로드맵을 제시해 드립니다.
          </p>
          
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-slate-400">회사명</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="(주)넥서스" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-slate-400">담당자 성함</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="홍길동" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-slate-400">이메일 주소</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="name@company.com" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-sm font-medium text-slate-400">문의 내용</label>
                <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="보안 컨설팅 관련 문의드립니다..."></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25">
                무료 상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-white">NEXUS SECURITY</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                서울시 강남구 테헤란로 123 넥서스 타워 15층<br/>
                사업자 등록번호: 123-45-67890<br/>
                대표전화: 02-1234-5678
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">모의해킹</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">보안 관제</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">취약점 진단</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">클라우드 보안</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">인재 채용</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">블로그</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2024 Nexus Security Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Database size={14}/></div>
               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Globe size={14}/></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;