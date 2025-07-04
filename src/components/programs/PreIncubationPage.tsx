import React from "react";
import { Button } from "@/components/programs/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/programs/Card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/programs/Accordion"
import {
  Lightbulb,
  Users,
  Target,
  BookOpen,
  Network,
  Presentation,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Rocket,
  Brain,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function PreIncubationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}


      
      

      {/* Hero Section */}
      <section
        className="py-20 lg:py-55 bg-black text-white relative"
        style={{
          backgroundImage: 'url(https://www.cuchd.in/udaan-2025/assets/img/newBanner-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" style={{zIndex:1}} />
        <div className="container mx-auto px-4 text-center relative mt-30" style={{zIndex:2}}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Start with an <span className="">Idea</span>.<br />
              Build a <span className="">Future</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering students to turn ideas into viable ventures through structured mentorship and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
             
            <div className="hidden lg:flex">
          
            <button className="bg-red-600 text-white px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 whitespace-nowrap">
              APPLY TO PRE-INCUBATION
            </button>
        =
        </div>
      
            </div>

            {/* Hero Illustration */}
            <div className="relative max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-8 items-center justify-center opacity-20">
                <div className="flex flex-col items-center space-y-4">
                 
                  
                </div>
                <div className="flex flex-col items-center space-y-4">
                 
                </div>
                <div className="flex flex-col items-center space-y-4">
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About Pre-Incubation <span className="text-red-600">@ TBI CU</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Pre-Incubation Program at TBI CU is designed to support early-stage student entrepreneurs who have
              innovative ideas but need guidance to develop them into working models. We help you validate your idea,
              connect with mentors, and create your first MVP (Minimum Viable Product).
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-600">Ideas Incubated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it For */}
      <section className="py-30 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">Who is it For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center"> 
                  
                  <CardTitle>Raw Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Students with raw or undeveloped startup ideas</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                
                  <CardTitle>Seeking Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">Innovators looking for mentorship and resources</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader className="text-center">
                  
                  <CardTitle>Exploring Entrepreneurship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Anyone seeking to explore entrepreneurship before formal incubation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* World Class Facilities Section */}
      <div className="min-h-screen bg-gray-50 py-10 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              We provide World Class <span className="text-red-600 font-semibold">Facilities</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chandigarh University houses various multifaceted Labs that gives our innovators & researchers a platform to
              work with ease of technology.
            </p>
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Genetics Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://naslefarda-clinic.com/en/wp-content/uploads/2023/08/shutterstock_1491119384_baixa-scaled-2.webp"
                  alt="Genetics Lab - Researcher using microscope"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Genetics Lab</h3>
                </div>
              </div>
            </div>

            {/* SEM Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                 src="https://www.eas.ualberta.ca/sem/files/P1080549.JPG"
                  alt="SEM Lab - Scanning Electron Microscope equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-xl font-semibold text-gray-800">SEM Lab</h3>
                </div>
              </div>
            </div>

            {/* XRD Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://www.irec.cat/wp-content/uploads/2020/08/Field-Emission-Scanning-Electron-Microscope_FE-SEM.jpg"
                  alt="XRD Lab - X-ray Diffraction equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-xl font-semibold text-gray-800">XRD Lab</h3>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image
                 src="https://imgcdn.stablediffusionweb.com/2024/12/19/d0a7139b-dd33-4f4e-a963-78394fe151e9.jpg"
                  alt="Artificial Intelligence Lab - AI and robotics technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Artificial Intelligence Lab</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Benefits */}
      <section id="benefits" className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-red-600 font-bold text-center mb-16">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
               
                <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">Connect with industry experts and successful entrepreneurs</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                
                <h3 className="text-xl font-semibold mb-2">Idea Validation</h3>
                <p className="text-gray-600">Test and refine your concept with market research</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
             
                <h3 className="text-xl font-semibold mb-2">University Resources</h3>
                <p className="text-gray-600">Access to labs, libraries, and research facilities</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-gray-600">Connect with fellow entrepreneurs and industry leaders</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
                
                <h3 className="text-xl font-semibold mb-2">Workshops & Bootcamps</h3>
                <p className="text-gray-600">Skill-building sessions and intensive training programs</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors">
               
                <h3 className="text-xl font-semibold mb-2">Pitch Opportunity</h3>
                <p className="text-gray-600">Chance to pitch for full incubation program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Incubation Journey */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-red-600 font-bold text-center mb-16">Pre-Incubation Journey</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Apply Online", description: "Submit your application with your innovative idea" },
                {
                  step: "02",
                  title: "Idea Evaluation & Shortlisting",
                  description: "Our experts review and evaluate your proposal",
                },
                {
                  step: "03",
                  title: "Mentor Allocation",
                  description: "Get paired with industry mentors matching your domain",
                },
                {
                  step: "04",
                  title: "MVP & Strategy Building",
                  description: "Develop your minimum viable product with guidance",
                },
                {
                  step: "05",
                  title: "Demo Day / Pitching",
                  description: "Present your progress and compete for full incubation",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="flex-shrink-0 ml-8">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-16">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">AK</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Arjun Kumar</CardTitle>
                      <CardDescription>EcoTech Solutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "TBI CU's pre-incubation program helped me transform my environmental idea into a working prototype.
                    The mentorship was invaluable."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">PS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Priya Sharma</CardTitle>
                      <CardDescription>HealthTech Innovations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "From a simple healthcare app idea to a funded startup - the journey started here at TBI CU. Amazing
                    support system!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">RG</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">Rahul Gupta</CardTitle>
                      <CardDescription>EdTech Platform</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "The structured approach and expert guidance helped me build a solid foundation for my EdTech
                    startup. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
     

      {/* Footer */}
      
      
    </div>
    
  )
}

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "What's the duration of the program?",
      answer:
        "The Pre-Incubation Program typically runs for 3-4 months, providing ample time for idea development, mentorship sessions, and MVP creation.",
    },
    {
      question: "Do I need a team to apply?",
      answer:
        "No, you can apply as an individual. However, we encourage team formation during the program and can help you connect with like-minded individuals.",
    },
    {
      question: "Is it open to all departments?",
      answer:
        "Yes, the program is open to students from all departments and disciplines. We believe innovation comes from diverse backgrounds and perspectives.",
    },
    {
      question: "What happens after pre-incubation?",
      answer:
        "Successful participants get the opportunity to pitch for our full Incubation Program, which offers funding, advanced mentorship, and comprehensive business support.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-black p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-8 tracking-wide">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-lg font-bold text-black">{faq.question}</h2>
                <div className="border-2 border-black p-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t-2 border-black">
            <h2 className="text-lg font-bold text-black mb-4">Have More Questions?</h2>
            <div className="border-2 border-black p-4 bg-white">
              <p className="text-gray-700">
                {"If you have additional questions not covered here, please don't hesitate to contact our team. We're here to help you understand our programs and find the right fit for your startup ey."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 