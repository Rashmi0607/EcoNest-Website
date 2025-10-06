import React from 'react';
import { Users, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Sustainability First',
      description: 'Every decision we make considers the environmental and social impact, ensuring a better future for our planet.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We believe in building strong relationships with our customers, partners, and the communities we serve.'
    },
    {
      icon: Target,
      title: 'Quality & Innovation',
      description: 'We constantly innovate to create beautiful, durable clothing using the latest sustainable technologies.'
    },
    {
      icon: Globe,
      title: 'Global Responsibility',
      description: 'Our commitment extends beyond business to creating positive change in the fashion industry worldwide.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      bio: 'Former fashion industry executive with 15 years of experience in sustainable manufacturing.'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Sustainability',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Environmental scientist passionate about creating circular fashion systems.'
    },
    {
      name: 'Emily Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      bio: 'Award-winning designer specializing in eco-friendly fashion and sustainable materials.'
    },
    {
      name: 'Michael Kim',
      role: 'Supply Chain Manager',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: 'Expert in ethical sourcing with a network of certified sustainable suppliers.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Fashion with a
              <span className="block text-emerald-600">Purpose</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Founded in 2020, EcoNest was born from a simple belief: fashion can be beautiful, 
              sustainable, and ethical all at once. We're on a mission to transform the industry 
              one garment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EcoNest started when our founder, Sarah Chen, witnessed firsthand the devastating 
                  environmental impact of fast fashion during her travels through textile manufacturing regions.
                </p>
                <p>
                  Determined to create change, she assembled a team of like-minded individuals who shared 
                  her vision of sustainable fashion. Together, we've built a brand that proves you don't 
                  have to choose between style and sustainability.
                </p>
                <p>
                  Today, we're proud to offer a curated collection of clothing made from organic, recycled, 
                  and innovative sustainable materials. Every piece in our collection is designed to last, 
                  reducing the need for frequent replacements and minimizing waste.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and help us make decisions that align with our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-6">
                  <value.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind EcoNest who are dedicated to making sustainable fashion accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-2xl leading-relaxed">
            "To prove that fashion can be a force for good, creating beautiful clothing that 
            respects both people and planet while inspiring others to make conscious choices."
          </p>
          <div className="mt-8 text-emerald-100">
            — The EcoNest Team
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Every purchase you make is a vote for a more sustainable future. 
            Together, we can transform the fashion industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;