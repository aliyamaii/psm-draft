import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const departments = ['Events', 'Operations', 'Marketing', 'Security', 'Customer Service', 'Finance', 'HR', 'Technical', 'Sales'];
const roles = ['Event Manager', 'Technical Lead', 'Marketing Coordinator', 'Security Supervisor', 'Customer Service Lead', 'Finance Officer', 'Logistics Manager', 'Human Resources', 'IT Specialist', 'Sales Representative', 'Event Coordinator', 'Audio Engineer', 'Marketing Manager', 'Security Officer', 'Customer Service Agent', 'Accountant', 'Training Specialist', 'Facilities Manager', 'Social Media Manager', 'Sales Executive'];

export default function EditEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState<'active' | 'on-leave' | 'inactive'>('active');
  const [hireDate, setHireDate] = useState('');
  const [skills, setSkills] = useState(['']);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const generateAvatar = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  useEffect(() => {
    // Load employee data from localStorage or mock data
    const loadEmployee = () => {
      setLoading(true);

      // Try to get from localStorage first
      const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
      const storedEmployee = storedEmployees.find((e: any) => e.id.toString() === id);

      if (storedEmployee) {
        setName(storedEmployee.name);
        setEmail(storedEmployee.email);
        setPhone(storedEmployee.phone);
        setRole(storedEmployee.role);
        setDepartment(storedEmployee.department);
        setStatus(storedEmployee.status);
        setHireDate(storedEmployee.hireDate);
        setSkills(storedEmployee.skills || ['']);
      } else {
        // Use a mock employee for demo if not found
        const mockEmployee = {
          id: 1,
          name: 'Sarah Ahmad',
          email: 'sarah.ahmad@perbadananstadium.my',
          phone: '+60 12-345 6789',
          role: 'Event Manager',
          department: 'Events',
          status: 'active',
          hireDate: '2025-06-15',
          skills: ['Event Planning', 'Team Management', 'Vendor Coordination', 'Budget Management']
        };
        setName(mockEmployee.name);
        setEmail(mockEmployee.email);
        setPhone(mockEmployee.phone);
        setRole(mockEmployee.role);
        setDepartment(mockEmployee.department);
        setStatus(mockEmployee.status);
        setHireDate(mockEmployee.hireDate);
        setSkills(mockEmployee.skills);
      }

      setLoading(false);
    };

    loadEmployee();
  }, [id]);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !phone || !role || !department || !hireDate) {
      alert('Please fill in all required fields');
      return;
    }

    // Update employee data
    const employeeData = {
      id: parseInt(id || '0'),
      name,
      email,
      phone,
      role,
      department,
      avatar: generateAvatar(name),
      status,
      hireDate,
      eventsManaged: 0, // Preserve this in real implementation
      performanceScore: 4.5, // Preserve this in real implementation
      lastActive: new Date().toISOString().split('T')[0],
      skills: skills.filter(s => s.trim() !== '')
    };

    // Update employee data in localStorage
    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    const updatedEmployees = storedEmployees.map((e: any) =>
      e.id.toString() === id ? employeeData : e
    );
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Show success message
    setShowSuccess(true);

    // Navigate back to employees page after showing success message
    setTimeout(() => {
      navigate('/employees');
    }, 1500);
  };

  if (loading) {
    return (
      <DashboardLayout title="Edit Employee Profile">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#273480]" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Employee Profile">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
          Employee profile updated successfully!
        </div>
      )}

      <div className="max-w-4xl">
        <button
          onClick={() => navigate('/employees')}
          className="inline-flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Employees
        </button>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h1 className="text-3xl mb-2" style={{ color: '#273480' }}>Edit Employee Profile</h1>
          <p className="text-gray-600 mb-8">Update employee information and skills</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl mb-4" style={{ color: '#273480' }}>Basic Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': '#273480' } as any}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="john.smith@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="+60 12-345 6789"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Role *
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a role</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Department *
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="">Select a department</option>
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Hire Date *
                    </label>
                    <input
                      type="date"
                      value={hireDate}
                      onChange={(e) => setHireDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#273480' }}>
                      Status *
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      required
                    >
                      <option value="active">Active</option>
                      <option value="on-leave">On Leave</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl" style={{ color: '#273480' }}>Skills & Expertise</h2>
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
                  style={{ backgroundColor: '#f3f3f5', color: '#273480' }}
                >
                  <Plus className="w-4 h-4" />
                  Add Skill
                </button>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#273480' } as any}
                      placeholder="E.g., Project Management"
                    />
                    {skills.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-lg text-white transition-colors"
                style={{ backgroundColor: '#E11A27' }}
              >
                <Save className="w-5 h-5" />
                Update Profile
              </button>
              <button
                type="button"
                onClick={() => navigate('/employees')}
                className="px-8 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}