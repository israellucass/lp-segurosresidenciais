import { useState, useEffect } from "react";
import svgPaths from "../imports/Site/svg-k7lbb5pc13";
import imgImgDela1 from "../imports/Site/1fa17dd4020a9c887b44ff657df58e06d7236648.png";
import imgImg1 from "../imports/Site/71063edab56ef373683bc17389fdd45325cfc0a7.png";
import imgImgEqtorial1 from "../imports/Site/c66cadc4ea5172b0dd9daf752e400bf34bc61605.png";
import imgEqtl022 from "../imports/Site/104e1e4a698221172b9b690e52f3afe701bcce0b.png";
import imgImgEqtorial2 from "../imports/Site/0b575c945d19be235022c62e883827ece7717e5e.png";
import imgPeopleIcons1 from "../imports/Site/748b8a3ec96111093e815f722088c0b47ae42a4c.png";
import pricingData from "../imports/pasted_text/pricing-section.json";
import logoImage from "../imports/image.png";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    cpf: "",
    isTitular: false,
    acceptTerms: false,
  });

  const [showSuccessMessage, setShowSuccessMessage] =
    useState(false);

  const [errors, setErrors] = useState({
    fullName: false,
    whatsapp: false,
    acceptTerms: false,
  });

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ["Sem burocracia", "Sem boleto novo", "Direto na conta de luz"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (
    field: string,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {
      fullName: !formData.fullName,
      whatsapp: !formData.whatsapp,
      acceptTerms: !formData.acceptTerms,
    };

    setErrors(newErrors);

    if (newErrors.fullName || newErrors.whatsapp) {
      return;
    }

    if (newErrors.acceptTerms) {
      return;
    }

    console.log("Form submitted:", formData);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      setFormData({
        fullName: "",
        whatsapp: "",
        cpf: "",
        isTitular: false,
        acceptTerms: false,
      });
      setErrors({
        fullName: false,
        whatsapp: false,
        acceptTerms: false,
      });
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    scrollToSection("contact-form");
  };

  const playVideo = () => {
    alert(
      'Vídeo "Sorte que Transforma" - funcionalidade de reprodução será implementada',
    );
  };

  return (
    <div className="w-full bg-white h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-[#5fe9d0] px-8 py-4 rounded-lg shadow-lg">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#404040] text-lg">
            ✓ Solicitação enviada com sucesso! Entraremos em
            contato em breve.
          </p>
        </div>
      )}

      {/* SEÇÃO 1 - Hero */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#2D45A0] min-h-[100dvh] flex items-center justify-center py-16 md:py-24 lg:py-32 snap-start"
      >
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgImgDela1}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-6 md:gap-8 items-start max-w-[908px]">
            {/* Logo */}
            <img src={logoImage} alt="Logo" className="h-12 md:h-16 w-auto object-contain" />

            {/* Headline */}
            <h1
              className="font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-white text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[1.25] tracking-tight"
              style={{
                fontVariationSettings: "'opsz' 14, 'wdth' 100",
              }}
            >
              Proteja sua casa
              <br />
              por menos de
              <br />
              <span className="text-[#5fe9d0]">
                R$ 1,00 por dia
              </span>
            </h1>

            {/* Subheadline */}
            <p key={currentPhraseIndex} className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white phrase-animation">{phrases[currentPhraseIndex]}</p>

            {/* Benefits */}
            <ul className="space-y-2 text-lg md:text-xl text-white list-disc pl-9">
              <li>Assistência 24h</li>
              <li>Resolve imprevistos rápido</li>
              <li>Exclusivo para clientes Equatorial</li>
            </ul>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="relative flex gap-2 items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full cursor-pointer transition-transform hover:scale-105 bg-[#5fe9d0] border-2 border-[rgba(255,255,255,0.12)] shadow-lg"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-base text-[#404040] whitespace-nowrap">
                Solicitar contato
              </p>
              <div className="w-5 h-5">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 15 13"
                >
                  <path d={svgPaths.p38193000} fill="#404040" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - Contact Form */}
      <section
        id="contact-form"
        className="relative w-full min-h-[100dvh] flex items-center justify-center py-16 md:py-20 lg:py-24 bg-[#002048] snap-start"
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Info Section */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 144 144"
                >
                  <path
                    d={svgPaths.p35fb1e80}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                  <path
                    d={svgPaths.p37b24000}
                    stroke="#5FE9D0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                <h2
                  className="font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-white tracking-tight"
                  style={{
                    fontVariationSettings:
                      "'opsz' 14, 'wdth' 100",
                  }}
                >
                  Conheça nossas soluções para{" "}
                  <span className="text-[#5fe9d0]">
                    proteger sua casa
                  </span>
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-lg md:text-xl leading-relaxed text-white">
                  Preencha seus dados para receber nossa
                  consultoria gratuita. Um de nossos
                  especialistas irá apresentar a cobertura ideal
                  para você.
                </p>
              </div>
            </div>

            {/* Form */}
            <div
              className="flex-1 w-full lg:max-w-[600px] rounded-3xl overflow-hidden shadow-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgb(45, 69, 160) 0%, rgb(45, 69, 160) 100%)",
              }}
            >
              <div className="p-8 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10">
                <div className="flex flex-col gap-4">
                  {/* Full Name Input */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1 items-center text-base">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#f5f5f5]">
                        Nome completo
                      </p>
                      <p className="font-['Inter:Bold',sans-serif] font-bold text-[#e5e5e5]">
                        *
                      </p>
                    </div>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange(
                          "fullName",
                          e.target.value,
                        )
                      }
                      placeholder="Digite seu nome completo"
                      className={`bg-white h-11 px-3 py-2.5 rounded-lg w-full border text-[#404040] font-['Inter:Regular',sans-serif] outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20"
                          : "border-[#e5e5e5] hover:border-[#5fe9d0] focus:border-[#5fe9d0] focus:ring-2 focus:ring-[#5fe9d0] focus:ring-opacity-20"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-300 text-sm font-['Inter:Regular',sans-serif]">
                        Campo obrigatório
                      </p>
                    )}
                  </div>

                  {/* Phone and CPF Row */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* WhatsApp Input */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex gap-1 items-center text-base">
                        <p className="font-['Inter:Medium',sans-serif] font-medium text-[#f5f5f5]">
                          WhatsApp (com DDD)
                        </p>
                        <p className="font-['Inter:Bold',sans-serif] font-bold text-[#e5e5e5]">
                          *
                        </p>
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          handleInputChange(
                            "whatsapp",
                            e.target.value,
                          )
                        }
                        placeholder="(00) 00000-0000"
                        className={`bg-white h-11 px-3 py-2.5 rounded-lg w-full border text-[#404040] font-['Inter:Regular',sans-serif] outline-none transition-colors ${
                          errors.whatsapp
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20"
                            : "border-[#e5e5e5] hover:border-[#5fe9d0] focus:border-[#5fe9d0] focus:ring-2 focus:ring-[#5fe9d0] focus:ring-opacity-20"
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-red-300 text-sm font-['Inter:Regular',sans-serif]">
                          Campo obrigatório
                        </p>
                      )}
                    </div>

                    {/* CPF Input */}
                    <div className="flex-1 flex flex-col gap-2">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#f5f5f5] text-base">
                        CPF
                      </p>
                      <input
                        type="text"
                        value={formData.cpf}
                        onChange={(e) =>
                          handleInputChange(
                            "cpf",
                            e.target.value,
                          )
                        }
                        placeholder="000.000.000-00"
                        className="bg-white h-11 px-3 py-2.5 rounded-lg w-full border border-[#e5e5e5] text-[#404040] font-['Inter:Regular',sans-serif] outline-none transition-colors hover:border-[#5fe9d0] focus:border-[#5fe9d0] focus:ring-2 focus:ring-[#5fe9d0] focus:ring-opacity-20"
                      />
                    </div>
                  </div>

                  {/* Titular Checkbox */}
                  <div className="flex gap-3 items-start">
                    <button
                      onClick={() =>
                        handleInputChange(
                          "isTitular",
                          !formData.isTitular,
                        )
                      }
                      className="flex-shrink-0 mt-0.5 overflow-clip rounded-md w-5 h-5 cursor-pointer transition-colors"
                      style={{
                        backgroundColor: formData.isTitular
                          ? "#5fe9d0"
                          : "transparent",
                        border: formData.isTitular
                          ? "none"
                          : "1px solid white",
                      }}
                    >
                      {formData.isTitular && (
                        <div className="flex items-center justify-center h-full">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 11.3333 8.41667"
                          >
                            <path
                              d={svgPaths.p1b635a00}
                              stroke="#002048"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                    <p
                      className="font-['Inter:Medium',sans-serif] font-medium text-base text-white flex-1 cursor-pointer"
                      onClick={() =>
                        handleInputChange(
                          "isTitular",
                          !formData.isTitular,
                        )
                      }
                    >
                      Sou titular da conta de energia
                    </p>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3 items-start">
                      <button
                        onClick={() =>
                          handleInputChange(
                            "acceptTerms",
                            !formData.acceptTerms,
                          )
                        }
                        className="flex-shrink-0 mt-0.5 overflow-clip rounded-md w-5 h-5 cursor-pointer transition-colors"
                        style={{
                          backgroundColor: formData.acceptTerms
                            ? "#5fe9d0"
                            : "transparent",
                          border: formData.acceptTerms
                            ? "none"
                            : errors.acceptTerms
                            ? "1px solid #ef4444"
                            : "1px solid white",
                        }}
                      >
                        {formData.acceptTerms && (
                          <div className="flex items-center justify-center h-full">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 11.3333 8.41667"
                            >
                              <path
                                d={svgPaths.p1b635a00}
                                stroke="#002048"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        )}
                      </button>
                      <p className={`font-['Inter:Medium',sans-serif] font-medium text-base flex-1 ${errors.acceptTerms ? 'text-red-300' : 'text-white'}`}>
                        Li e concordo com os{" "}
                        <span className="text-[#5fe9d0] underline cursor-pointer">
                          Termos de uso
                        </span>{" "}
                        e{" "}
                        <span className="text-[#5fe9d0] underline cursor-pointer">
                          Políticas de privacidade
                        </span>
                      </p>
                    </div>
                    {errors.acceptTerms && (
                      <p className="text-red-300 text-sm font-['Inter:Regular',sans-serif] ml-8">
                        Você precisa aceitar os termos para continuar
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="relative flex gap-2 items-center justify-center px-8 py-3 rounded-full cursor-pointer transition-transform hover:scale-105 bg-[#5fe9d0] border-2 border-[rgba(255,255,255,0.12)] shadow-lg"
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-base text-[#404040] whitespace-nowrap">
                    Solicitar contato
                  </p>
                  <div className="w-5 h-5">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 15 13"
                    >
                      <path
                        d={svgPaths.p38193000}
                        fill="#404040"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - Pricing Comparison */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden snap-start">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgImg1}
          />
        </div>
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgImgEqtorial1}
          />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(-44.8247deg, rgb(0, 32, 72) 0%, rgba(0, 32, 72, 0) 43.59%), linear-gradient(65.676deg, rgb(0, 32, 72) 13.186%, rgba(0, 32, 72, 0) 31.525%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-end justify-between min-h-[600px] lg:min-h-[800px]">
            {/* Left - Expenses */}
            <div className="flex flex-col gap-6 lg:self-start">
              <p className="font-['Inter:Regular',sans-serif] text-2xl md:text-3xl lg:text-4xl leading-tight text-white tracking-tight">
                Em vez de gastar{" "}
                <span className="text-[#ff0004]">muito</span>{" "}
                com cada imprevisto…
              </p>
              <div className="flex flex-col gap-4 w-full md:w-[356px]">
                <div className="bg-[rgba(163,3,6,0.5)] border border-[#a30306] px-6 py-2.5 rounded-lg w-full flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[rgba(0,0,0,0.2)] border border-[#7a271a] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d={svgPaths.p2c7cb400}
                          stroke="#FEE4E2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white">
                        Chaveiro
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-sm text-[#d3d3d3]">
                        Pix
                      </p>
                    </div>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white text-right">
                    -R$ 140,00
                  </p>
                </div>

                <div className="bg-[rgba(163,3,6,0.5)] border border-[#a30306] px-6 py-2.5 rounded-lg w-full flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[rgba(0,0,0,0.2)] border border-[#7a271a] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 21.1213 21.1213"
                      >
                        <path
                          d={svgPaths.p39139600}
                          stroke="#FEE4E2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white">
                        Encanador
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-sm text-[#d3d3d3]">
                        Pix
                      </p>
                    </div>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white text-right">
                    -R$ 150,00
                  </p>
                </div>

                <div className="bg-[rgba(163,3,6,0.5)] border border-[#a30306] px-6 py-2.5 rounded-lg w-full flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="bg-[rgba(0,0,0,0.2)] border border-[#7a271a] p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          d={svgPaths.p1fa4cc00}
                          stroke="#FEE4E2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white">
                        Eletricista
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-sm text-[#d3d3d3]">
                        Parcela 1 de 3
                      </p>
                    </div>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-lg text-white text-right">
                    -R$ 200,00
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Savings */}
            <div className="flex flex-col gap-6 items-start lg:items-end lg:self-end">
              <p className="font-['Inter:Regular',sans-serif] text-2xl md:text-3xl lg:text-4xl leading-tight text-white lg:text-right tracking-tight">
                …pague{" "}
                <span className="text-[#5fe9d0]">pouco</span>
                <br />
                por todos juntos
              </p>
              <div className="flex gap-2 items-center">
                <div className="bg-[#1A91CB] p-3 rounded">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 35.3333 35.3333"
                  >
                    <path
                      d={svgPaths.p20007c70}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="bg-[#1A91CB] border border-[#1A91CB] px-6 py-2.5 rounded">
                  <p className="font-['Inter:Regular',sans-serif] text-xl md:text-2xl lg:text-3xl text-white tracking-tight">
                    Planos a partir de{" "}
                    <span className="font-semibold">
                      R$ 16,90
                    </span>
                    /mês
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - Video */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center py-16 md:py-20 lg:py-24 bg-[#002048] overflow-hidden snap-start">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="w-full h-full object-cover scale-110"
            src={imgEqtl022}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Title */}
            <div className="flex flex-col gap-4 items-center">
              <div className="bg-[#002048] px-2 py-1">
                <h2
                  className="font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-4xl md:text-6xl lg:text-8xl leading-[1.25] text-white text-center tracking-tight whitespace-nowrap"
                  style={{
                    fontVariationSettings:
                      "'opsz' 14, 'wdth' 100",
                  }}
                >
                  Sorte que Transforma
                </h2>
              </div>
              <div className="bg-[#002048] px-2 py-1">
                <p className="font-['Inter:Regular',sans-serif] text-lg md:text-xl leading-[1.33] text-white text-center whitespace-nowrap">
                  Concorra a prêmios mensais com seus números da
                  sorte
                </p>
              </div>
            </div>

            {/* Video Container */}
            <VideoPlayer onPlay={playVideo} />

            {/* Bottom Text */}
            <div className="bg-[#c3cbd5] px-2 py-1 mx-auto">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.25] text-[#011537] text-center tracking-tight whitespace-nowrap">
                Você pode ser o próximo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - Pricing Plans */}
      <section
        className="relative w-full min-h-[100dvh] flex items-center justify-center py-16 md:py-20 lg:py-24 overflow-hidden snap-start"
        style={{
          background:
            "linear-gradient(98.7712deg, rgb(0, 32, 72) 7.5184%, rgb(45, 69, 160) 86.855%)",
        }}
      >
        <div className="absolute inset-0 z-0 bg-[#002048]">
          <img
            alt=""
            className="w-full h-full object-cover opacity-70"
            src={imgImgEqtorial2}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Title */}
            <h2
              className="font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold text-4xl md:text-5xl lg:text-6xl text-center text-white tracking-tight"
              style={{
                fontVariationSettings: "'opsz' 14, 'wdth' 100",
              }}
            >
              Escolha sua proteção
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingData.plans_grid.cards.map((plan, index) => {
                return (
                  <div
                    key={plan.id}
                    className={`rounded-xl p-6 flex flex-col gap-6 relative ${
                      index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                    } ${
                      plan.badge
                        ? "bg-[#2D45A0] bg-opacity-40 border-[#5FE9D0] border-2"
                        : "bg-[#00204899] border-[#5FE9D0] border"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 border border-[#5FE9D0] px-3 py-1 rounded-full bg-[#5fe9d0]">
                        <p className="font-['Inter:SemiBold',sans-serif] text-sm font-semibold uppercase tracking-wide text-[#002048]">
                          {plan.badge.text}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      <h3 className="font-['Inter:SemiBold',sans-serif] font-semibold text-2xl text-white">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <p
                          className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-5xl text-white"
                          style={{
                            fontVariationSettings: "'opsz' 14, 'wdth' 100",
                          }}
                        >
                          {plan.price.amount}
                        </p>
                        <span className="font-['Inter:Regular',sans-serif] text-sm text-[#a1a1aa]">/mês</span>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-sm text-[#d1d5db] leading-relaxed">
                        {plan.slogan}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col gap-3">
                      {plan.features.map((feature, featureIndex) => {
                        const [title, ...descParts] = feature.split(": ");
                        const description = descParts.join(": ").replace("Cobertura de ", "");
                        return (
                          <div key={featureIndex} className="flex gap-3 items-start">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="#5fe9d0"/>
                            </svg>
                            <div className="flex flex-col">
                              <p className="font-['Inter:Regular',sans-serif] text-sm text-white leading-relaxed">
                                {title}
                              </p>
                              {description && (
                                <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-sm text-white leading-relaxed">
                                  {description}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="w-full max-w-3xl mx-auto bg-gradient-to-r from-[#2D45A0] to-[#4F46B9] px-12 py-6 rounded-xl cursor-pointer transition-transform hover:scale-105"
            >
              <p
                className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center"
                style={{
                  fontVariationSettings:
                    "'opsz' 14, 'wdth' 100",
                }}
              >
                Receba uma proposta personalizada
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - Footer CTA */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center py-16 md:py-20 lg:py-24 bg-[#f2f2f2] overflow-hidden snap-start">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-60 pointer-events-none">
          <img
            alt=""
            className="w-full h-auto object-contain max-h-full"
            src={imgPeopleIcons1}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Title */}
            <div className="text-center">
              <h2
                className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-4xl md:text-5xl lg:text-6xl text-[#000e39] mb-4"
                style={{
                  fontVariationSettings:
                    "'opsz' 14, 'wdth' 100",
                }}
              >
                +1 milhão de clientes já
              </h2>
              <p
                className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-5xl md:text-6xl lg:text-7xl text-[#000e39]"
                style={{
                  fontVariationSettings:
                    "'opsz' 14, 'wdth' 100",
                }}
              >
                utilizam esse benefício.
              </p>
            </div>

            <p
              className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl text-center text-[#000e39]"
              style={{
                fontVariationSettings: "'opsz' 14, 'wdth' 100",
              }}
            >
              Evite o próximo prejuízo
            </p>

            {/* CTA Button */}
            <div className="border-2 border-[#15162c] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 max-w-4xl mx-auto w-full">
              <p
                className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium text-2xl md:text-3xl text-[#15162c] text-center md:text-left"
                style={{
                  fontVariationSettings:
                    "'opsz' 14, 'wdth' 100",
                }}
              >
                Quero contratar o benefício
              </p>
              <div className="hidden md:flex bg-[#15162c] rounded-full w-[100px] h-[42px] items-center justify-center">
                <svg
                  className="w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 42"
                >
                  <rect
                    fill="#15162C"
                    height="42"
                    rx="21"
                    width="100"
                  />
                  <path
                    d="M53 20C52.4477 20 52 20.4477 52 21C52 21.5523 52.4477 22 53 22V21V20ZM85.7071 21.7071C86.0976 21.3166 86.0976 20.6834 85.7071 20.2929L79.3431 13.9289C78.9526 13.5384 78.3195 13.5384 77.9289 13.9289C77.5384 14.3195 77.5384 14.9526 77.9289 15.3431L83.5858 21L77.9289 26.6569C77.5384 27.0474 77.5384 27.6805 77.9289 28.0711C78.3195 28.4616 78.9526 28.4616 79.3431 28.0711L85.7071 21.7071ZM53 21V22L85 22V21V20L53 20V21Z"
                    fill="#00CEFE"
                  />
                </svg>
              </div>
              <button
                onClick={scrollToForm}
                className="bg-[#1A91CB] px-8 py-3 rounded-2xl cursor-pointer transition-transform hover:scale-105"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium text-xl md:text-2xl text-[#15162c]">
                  Fale conosco
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#002048] snap-start">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex flex-col gap-6">
            {/* Conteúdo acima da linha */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Bloco Esquerda: Logo + Nome + CNPJ */}
              <div className="flex flex-col gap-4 lg:w-1/3 items-start">
                <img src={logoImage} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
                <div className="font-['Inter:Regular',sans-serif] text-base text-[#f5f5f5]">
                  <p className="font-semibold mb-0">
                    Equatorial Serviços
                  </p>
                  <p className="mb-0">
                    CNPJ 39.155.151/0001-54
                  </p>
                </div>
              </div>

              {/* Bloco Direita: Texto Informativo */}
              <div className="flex-1 font-['Inter:Regular',sans-serif] text-xs text-[#d1d5db] leading-relaxed space-y-3">
                <p>
                  <strong>Equatorial Serviços - CNPJ: 39.155.151/0001-54</strong><br />
                  É uma plataforma de seguros e assistências 100% digital.
                </p>

                <p>
                  <strong>Endereço:</strong> Alameda A, Quadra Sqs, 100, Altos do Calhau / Cohafuma - São Luís/MA, CEP 65070-900
                </p>

                <p>
                  O registro deste plano na SUSEP não implica, por parte da Autarquia, incentivo ou recomendação à sua comercialização.
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Seguro Residencial: garantido por SEGUROS SURA - Processo SUSEP nº 15414.003816/2007-85</li>
                  <li>Título de Capitalização: garantido por ICATU CAPITALIZAÇÃO S.A - Processo SUSEP nº 15.414.900396/2019-11</li>
                </ul>

                <p>
                  As condições contratuais e regulamentos destes produtos, protocolizados junto à SUSEP, poderão ser consultados no endereço eletrônico www.susep.gov.br, de acordo com o número de processos constante da apólice/proposta.
                </p>

                <p>
                  <strong>Ouvidoria:</strong> 0800 123 4567 | <strong>Atendimento Equatorial Serviços:</strong> 0800 728 9518
                </p>

                <p className="italic">
                  Declaro ter tomado ciência, antes da aquisição deste seguro, por meio do intermediário, de todas as informações que a Resolução CNSP 382/20 me garante o acesso.
                </p>
              </div>
            </div>

            {/* Linha divisória */}
            <div className="h-px w-full bg-[#E5E5E5]" />

            {/* Copyright abaixo da linha */}
            <p className="font-['Inter:Regular',sans-serif] text-sm text-[#f5f5f5]">
              © 2026 Equatorial Serviços. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}