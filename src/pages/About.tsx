
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Target, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We put our clients first, understanding their unique needs and challenges to deliver personalized solutions.'
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'Every strategy we implement is designed to deliver measurable results and drive real business growth.'
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'We develop data-driven strategies that align with your business objectives and market opportunities.'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Our team is passionate about digital marketing and committed to staying ahead of industry trends.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      description: 'Digital marketing strategist with 8+ years of experience helping businesses grow online.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      role: 'Head of SEO',
      description: 'SEO expert specializing in technical optimization and content strategy for maximum visibility.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Social Media Director',
      description: 'Creative social media strategist with expertise in building engaged communities and viral content.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              About DigitalGrow
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of digital marketing experts dedicated to helping small businesses and startups thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe every business deserves the opportunity to succeed online. Our mission is to democratize digital marketing by providing small businesses and startups with the same high-quality strategies and tools that were once only available to large corporations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through innovative solutions, personalized service, and a commitment to measurable results, we help our clients not just compete, but thrive in their respective markets.
              </p>
              <Button 
                asChild
                className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-3"
              >
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-brand-teal/10 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-brand-navy mb-2">{member.name}</h3>
                <p className="text-brand-teal font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-teal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">250%</div>
              <div className="text-lg opacity-90">Average ROI Increase</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction Rate</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business achieve its digital marketing goals.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
