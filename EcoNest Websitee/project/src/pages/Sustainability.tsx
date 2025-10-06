import React from 'react';
import { Leaf, Recycle, Heart, Award, TreePine, Droplets } from 'lucide-react';

const Sustainability: React.FC = () => {
  const commitments = [
    {
      icon: Leaf,
      title: 'Organic Materials',
      description: 'We use only certified organic cotton, hemp, and other sustainable fibers that are grown without harmful pesticides or chemicals.',
      stats: '100% Organic'
    },
    {
      icon: Recycle,
      title: 'Circular Fashion',
      description: 'Our recycled materials program turns plastic bottles and textile waste into beautiful, durable clothing.',
      stats: '50,000+ Bottles Recycled'
    },
    {
      icon: TreePine,
      title: 'Carbon Neutral',
      description: 'We offset 100% of our carbon emissions through verified reforestation projects and renewable energy initiatives.',
      stats: '0 Net Emissions'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Our manufacturing process uses 91% less water than conventional cotton production through innovative techniques.',
      stats: '91% Water Savings'
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'We ensure fair wages and safe working conditions for all workers in our supply chain.',
      stats: '25+ Fair Trade Partners'
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'Durable, long-lasting designs that reduce the need for frequent replacements and minimize waste.',
      stats: '2 Year Warranty'
    }
  ];

  const impacts = [
    {
      number: '50,000+',
      label: 'Plastic Bottles Recycled',
      description: 'Diverted from oceans and landfills'
    },
    {
      number: '25,000',
      label: 'Trees Planted',
      description: 'Through our reforestation program'
    },
    {
      number: '1M+',
      label: 'Gallons Saved',
      description: 'Water conserved in production'
    },
    {
      number: '100%',
      label: 'Carbon Neutral',
      description: 'All emissions offset'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Fashion That Cares for
              <span className="block text-emerald-600">Our Planet</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're committed to creating beautiful, sustainable clothing while protecting the environment 
              and supporting ethical practices throughout our supply chain.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full font-medium">
              <Leaf className="h-5 w-5 mr-2" />
              100% Sustainable Materials
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to environmental responsibility and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-6">
                  <commitment.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {commitment.description}
                </p>
                <div className="text-emerald-600 font-semibold">
                  {commitment.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl opacity-90">
              Together with our community, we're making a measurable difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {impact.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {impact.label}
                </div>
                <div className="text-emerald-100">
                  {impact.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Concept to Closet
            </h2>
            <p className="text-xl text-gray-600">
              How we create sustainable fashion that doesn't compromise on style or quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sustainable Sourcing
                    </h3>
                    <p className="text-gray-600">
                      We carefully select organic and recycled materials from certified suppliers who share our values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ethical Manufacturing
                    </h3>
                    <p className="text-gray-600">
                      Our partner factories provide fair wages, safe working conditions, and support local communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Carbon-Neutral Shipping
                    </h3>
                    <p className="text-gray-600">
                      We offset 100% of shipping emissions and use recyclable packaging made from post-consumer materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Circular Lifecycle
                    </h3>
                    <p className="text-gray-600">
                      When your clothes reach end-of-life, we'll help you recycle them into new products.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable Fashion Process"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We're proud to be certified by leading sustainability organizations
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <Award className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="text-sm font-medium">GOTS Certified</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <Award className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="text-sm font-medium">Fair Trade</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <Award className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="text-sm font-medium">B-Corp</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-2">
                <Award className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="text-sm font-medium">Carbon Neutral</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;