
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Users, Target, FileText, Mail, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Content optimization',
        'Link building campaigns',
        'Monthly performance reports'
      ],
      price: 'Starting at $899/month'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major platforms.',
      features: [
        'Content creation and curation',
        'Community management',
        'Paid social advertising',
        'Influencer partnerships',
        'Analytics and reporting'
      ],
      price: 'Starting at $699/month'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted paid advertising campaigns across Google and social platforms.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'Conversion tracking setup',
        'A/B testing campaigns',
        'Budget optimization'
      ],
      price: 'Starting at $799/month'
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Create compelling content that converts visitors into customers and builds brand authority.',
      features: [
        'Content strategy development',
        'Blog writing and optimization',
        'Video content planning',
        'Email newsletters',
        'Content calendar management'
      ],
      price: 'Starting at $599/month'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with strategic email marketing campaigns.',
      features: [
        'Email automation setup',
        'Newsletter design and copy',
        'Segmentation strategies',
        'A/B testing campaigns',
        'Performance analytics'
      ],
      price: 'Starting at $399/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track your digital marketing performance with comprehensive analytics and insights.',
      features: [
        'Google Analytics setup',
        'Custom dashboard creation',
        'Monthly performance reports',
        'ROI tracking and analysis',
        'Strategic recommendations'
      ],
      price: 'Starting at $299/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to help your business grow and succeed in the competitive online landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-teal/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-brand-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brand-teal rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-brand-teal font-semibold text-lg">
                        {service.price}
                      </div>
                      <Button 
                        asChild
                        className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                      >
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'We develop a customized digital marketing strategy' },
              { step: '03', title: 'Implementation', description: 'We execute campaigns and optimize for results' },
              { step: '04', title: 'Analysis', description: 'We track, measure, and report on performance' },
            ].map((process, index) => (
              <div 
                key={process.step} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-navy to-brand-teal">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which services are right for your business and create a custom strategy.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
