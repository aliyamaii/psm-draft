import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Mail, MessageCircle, Zap, Clock, CheckCircle, BarChart, Users, Settings, Globe, Bell } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const automationTypes = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Automation',
    description: 'Automate email communications for bookings, reminders, and follow-ups.',
    features: ['Booking confirmations', 'Event reminders', 'Thank you emails', 'Follow-up sequences'],
    color: '#273480'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'WhatsApp Automation',
    description: 'Send automated WhatsApp messages for instant customer engagement.',
    features: ['Booking notifications', 'Event updates', 'QR code delivery', 'Support responses'],
    color: '#E11A27'
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'SMS Automation',
    description: 'Reach customers via SMS for urgent communications and reminders.',
    features: ['Text reminders', 'SMS confirmations', 'Alert notifications', 'Short links'],
    color: '#9F4091'
  }
];

const workflows = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Instant Triggers',
    description: 'Set up automation workflows that trigger instantly based on customer actions.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Scheduled Sends',
    description: 'Schedule messages to be sent at optimal times for maximum engagement.'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Performance Tracking',
    description: 'Monitor automation performance with detailed analytics and reports.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Audience Segmentation',
    description: 'Target specific customer segments with personalized automation flows.'
  }
];

export default function AutomationWorkflow() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl mb-6 font-bold" style={{ color: '#273480' }}>
            Automation Workflow
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Streamline your communications with powerful automation tools
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8YXV0b21hdGlvbiUyMHdvcmtmbG93fGVufDB8fHx8fDE3NzYyNDAyNzh8&ixlib=rb-4.1.0&q=80&w=1200"
            alt="Automation workflow"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Communication Automation
            </h2>
            <p className="text-xl text-gray-600">
              Multiple channels for automated customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{ borderColor: type.color }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: type.color }}>
                  {type.icon}
                </div>
                <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Powerful Workflow Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create effective automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow) => (
              <div key={workflow.title} className="bg-white rounded-xl p-6 shadow-lg border-2 hover:shadow-lg transition-shadow" style={{ borderColor: '#273480' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#273480' }}>
                  {workflow.icon}
                </div>
                <h3 className="text-xl mb-2 font-semibold" style={{ color: '#273480' }}>
                  {workflow.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {workflow.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Set up automation in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <div className="text-6xl font-bold mb-4" style={{ color: '#273480' }}>1</div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Choose Trigger</h3>
              <p className="text-gray-600 leading-relaxed">
                Select what action should start your automation workflow.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <div className="text-6xl font-bold mb-4" style={{ color: '#E11A27' }}>2</div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Set Actions</h3>
              <p className="text-gray-600 leading-relaxed">
                Define what happens when the trigger is activated.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <div className="text-6xl font-bold mb-4" style={{ color: '#9F4091' }}>3</div>
              <h3 className="text-2xl mb-3 font-semibold" style={{ color: '#273480' }}>Go Live</h3>
              <p className="text-gray-600 leading-relaxed">
                Activate your workflow and watch it work automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold" style={{ color: '#273480' }}>
              Why Use Automation?
            </h2>
            <p className="text-xl text-gray-600">
              Save time and improve customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#273480' }}>
              <Clock className="w-12 h-12 mb-4" style={{ color: '#273480' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Save Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate manual tasks and focus on growing your business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#E11A27' }}>
              <Bot className="w-12 h-12 mb-4" style={{ color: '#E11A27' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Consistent Messaging</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure every customer receives timely, accurate information.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#9F4091' }}>
              <BarChart className="w-12 h-12 mb-4" style={{ color: '#9F4091' }} />
              <h3 className="text-xl mb-3 font-semibold" style={{ color: '#273480' }}>Better Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Track engagement and optimize your communication strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-6 font-bold" style={{ color: '#273480' }}>
            Ready to Automate?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start saving time and improving customer experience today
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-12 py-4 rounded-lg text-white flex items-center gap-2 transition-colors text-lg font-semibold"
              style={{ backgroundColor: '#E11A27' }}
            >
              Get Started
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/features"
              className="px-12 py-4 rounded-lg border-2 transition-colors text-lg font-semibold"
              style={{ borderColor: '#273480', color: '#273480' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}