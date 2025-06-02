
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechStart Inc.',
      category: 'SaaS Startup',
      description: 'Complete digital transformation for a B2B SaaS company, including SEO, content marketing, and lead generation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      results: [
        '300% increase in organic traffic',
        '150% boost in qualified leads',
        '85% improvement in conversion rate'
      ],
      services: ['SEO', 'Content Marketing', 'PPC']
    },
    {
      title: 'Local Bistro Chain',
      category: 'Restaurant',
      description: 'Social media marketing and local SEO campaign for a growing restaurant chain with 5 locations.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      results: [
        '250% increase in social followers',
        '40% growth in foot traffic',
        '200% boost in online orders'
      ],
      services: ['Social Media', 'Local SEO', 'Email Marketing']
    },
    {
      title: 'Wellness Studio',
      category: 'Health & Fitness',
      description: 'Brand building and digital marketing strategy for a boutique wellness studio focusing on yoga and mindfulness.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68e77?w=600&h=400&fit=crop',
      results: [
        '180% increase in class bookings',
        '90% growth in membership sign-ups',
        '120% boost in brand awareness'
      ],
      services: ['Branding', 'Social Media', 'Content Strategy']
    },
    {
      title: 'E-commerce Fashion',
      category: 'Retail',
      description: 'Performance marketing and conversion optimization for an online fashion retailer targeting millennials.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      results: [
        '400% increase in online sales',
        '65% improvement in ROAS',
        '50% reduction in customer acquisition cost'
      ],
      services: ['PPC', 'Social Ads', 'Conversion Optimization']
    },
    {
      title: 'Professional Services',
      category: 'Legal',
      description: 'Lead generation and reputation management for a law firm specializing in business and corporate law.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      results: [
        '220% increase in consultation requests',
        '95% improvement in online reputation',
        '150% growth in case referrals'
      ],
      services: ['SEO', 'Reputation Management', 'Content Marketing']
    },
    {
      title: 'Home Services',
      category: 'Construction',
      description: 'Digital marketing strategy for a home renovation company to increase local visibility and lead generation.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      results: [
        '350% increase in project inquiries',
        '75% growth in service area coverage',
        '200% boost in online reviews'
      ],
      services: ['Local SEO', 'PPC', 'Social Media']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across various industries achieve remarkable growth through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-brand-navy">{project.title}</h3>
                    <Badge variant="secondary" className="bg-brand-teal/10 text-brand-teal">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-navy mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <TrendingUp className="h-4 w-4 text-brand-teal mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              How We Deliver Results
            </h2>
            <p className="text-xl text-gray-600">
              Our proven methodology for success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Deep Understanding',
                description: 'We start by thoroughly understanding your business, target audience, and competitive landscape.'
              },
              {
                icon: TrendingUp,
                title: 'Strategic Planning',
                description: 'We develop data-driven strategies tailored to your specific goals and market opportunities.'
              },
              {
                icon: Award,
                title: 'Continuous Optimization',
                description: 'We constantly monitor, test, and optimize campaigns to maximize performance and ROI.'
              }
            ].map((step, index) => (
              <Card 
                key={step.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-brand-teal/10 rounded-lg w-fit mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-teal">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-medium mb-6 italic">
            "DigitalGrow transformed our business. Their strategic approach and dedication to results helped us achieve growth we never thought possible."
          </blockquote>
          <div className="text-lg opacity-90">
            <div className="font-semibold">Sarah Johnson</div>
            <div>CEO, TechStart Inc.</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
