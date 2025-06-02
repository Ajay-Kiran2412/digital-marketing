
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, Target, Award, Star, CheckCircle, Zap, BarChart3 } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic to your website with proven strategies.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major platforms.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid advertising campaigns that convert.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Content Strategy',
      description: 'Create compelling content that converts visitors into loyal customers.',
      gradient: 'from-orange-500 to-orange-600'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'DigitalGrow transformed our online presence. Our website traffic increased by 300% in just 6 months!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Local Bistro',
      content: 'Their social media strategy helped us triple our customer base. Highly recommend their services!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Wellness Studio',
      content: 'Professional, results-driven, and always available. They truly understand digital marketing.',
      rating: 5,
      avatar: 'ER'
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: CheckCircle },
    { number: '250%', label: 'Average Growth', icon: BarChart3 },
    { number: '5 Years', label: 'Experience', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-brand-teal/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-brand-teal/10 rounded-full text-brand-teal font-medium text-sm mb-6 border border-brand-teal/20">
              <Zap className="h-4 w-4 mr-2" />
              Digital Marketing Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-navy mb-8 leading-tight">
              Grow Your Business <br />
              <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                Digitally
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              We help small businesses and startups thrive in the digital world through strategic marketing solutions that drive real growth and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90 text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brand-teal/25"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-teal/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-blue/10 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-brand-teal to-brand-blue"></div>
                <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg bg-white group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's work together to create a digital marketing strategy that delivers results.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-brand-navy hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link to="/contact">
              Book Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
