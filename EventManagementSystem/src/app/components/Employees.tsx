import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Plus, Search, Mail, Phone, Calendar, MapPin, Edit, Trash2, Filter, TrendingUp } from 'lucide-react';
import DashboardLayout from './DashboardLayout';

const mockEmployees = [
  {
    id: 1,
    name: 'Sarah Ahmad',
    email: 'sarah.ahmad@perbadananstadium.my',
    phone: '+60 12-345 6789',
    role: 'Event Manager',
    department: 'Events',
    avatar: 'SA',
    status: 'active',
    hireDate: '2025-06-15',
    eventsManaged: 23,
    performanceScore: 4.8,
    lastActive: '2026-04-15',
    skills: ['Event Planning', 'Team Management', 'Vendor Coordination', 'Budget Management']
  },
  {
    id: 2,
    name: 'Mohamed Khan',
    email: 'mohamed.khan@perbadananstadium.my',
    phone: '+60 12-345 6790',
    role: 'Technical Lead',
    department: 'Operations',
    avatar: 'MK',
    status: 'active',
    hireDate: '2024-03-20',
    eventsManaged: 45,
    performanceScore: 4.7,
    lastActive: '2026-04-15',
    skills: ['Technical Setup', 'Equipment Management', 'Troubleshooting', 'Safety Protocols']
  },
  {
    id: 3,
    name: 'Jennifer Lee',
    email: 'jennifer.lee@perbadananstadium.my',
    phone: '+60 12-345 6791',
    role: 'Marketing Coordinator',
    department: 'Marketing',
    avatar: 'JL',
    status: 'active',
    hireDate: '2025-01-10',
    eventsManaged: 31,
    performanceScore: 4.9,
    lastActive: '2026-04-14',
    skills: ['Social Media', 'Content Creation', 'Campaign Management', 'Analytics']
  },
  {
    id: 4,
    name: 'David Wong',
    email: 'david.wong@perbadananstadium.my',
    phone: '+60 12-345 6792',
    role: 'Security Supervisor',
    department: 'Security',
    avatar: 'DW',
    status: 'active',
    hireDate: '2024-08-25',
    eventsManaged: 67,
    performanceScore: 4.6,
    lastActive: '2026-04-15',
    skills: ['Security Planning', 'Crowd Control', 'Emergency Response', 'Team Leadership']
  },
  {
    id: 5,
    name: 'Aisha Binti',
    email: 'aisha.binti@perbadananstadium.my',
    phone: '+60 12-345 6793',
    role: 'Customer Service Lead',
    department: 'Customer Service',
    avatar: 'AB',
    status: 'active',
    hireDate: '2025-04-05',
    eventsManaged: 38,
    performanceScore: 4.5,
    lastActive: '2026-04-13',
    skills: ['Customer Relations', 'Conflict Resolution', 'Team Training', 'Quality Assurance']
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@perbadananstadium.my',
    phone: '+60 12-345 6794',
    role: 'Finance Officer',
    department: 'Finance',
    avatar: 'RK',
    status: 'active',
    hireDate: '2024-11-12',
    eventsManaged: 52,
    performanceScore: 4.8,
    lastActive: '2026-04-15',
    skills: ['Financial Planning', 'Budget Tracking', 'Vendor Payments', 'Reporting']
  },
  {
    id: 7,
    name: 'Nurul Islam',
    email: 'nurul.islam@perbadananstadium.my',
    phone: '+60 12-345 6795',
    role: 'Logistics Manager',
    department: 'Operations',
    avatar: 'NI',
    status: 'on-leave',
    hireDate: '2024-05-18',
    eventsManaged: 41,
    performanceScore: 4.4,
    lastActive: '2026-04-10',
    skills: ['Supply Chain', 'Vendor Management', 'Timeline Coordination', 'Risk Assessment']
  },
  {
    id: 8,
    name: 'Fatimah Zahra',
    email: 'fatimah.zahra@perbadananstadium.my',
    phone: '+60 12-345 6796',
    role: 'Human Resources',
    department: 'HR',
    avatar: 'FZ',
    status: 'active',
    hireDate: '2023-09-22',
    eventsManaged: 0,
    performanceScore: 4.9,
    lastActive: '2026-04-15',
    skills: ['Recruitment', 'Employee Relations', 'Policy Development', 'Training Programs']
  },
  {
    id: 9,
    name: 'Chong Wei Ling',
    email: 'chong.weiling@perbadananstadium.my',
    phone: '+60 12-345 6797',
    role: 'IT Specialist',
    department: 'Technical',
    avatar: 'CW',
    status: 'inactive',
    hireDate: '2025-02-15',
    eventsManaged: 28,
    performanceScore: 4.3,
    lastActive: '2026-03-28',
    skills: ['System Administration', 'Network Security', 'Technical Support', 'Software Implementation']
  },
  {
    id: 10,
    name: 'Ahmad Bin Ali',
    email: 'ahmad.binali@perbadananstadium.my',
    phone: '+60 12-345 6798',
    role: 'Sales Representative',
    department: 'Sales',
    avatar: 'AA',
    status: 'active',
    hireDate: '2024-07-08',
    eventsManaged: 56,
    performanceScore: 4.7,
    lastActive: '2026-04-15',
    skills: ['Client Relations', 'Contract Negotiation', 'Market Analysis', 'Revenue Generation']
  },
  {
    id: 11,
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@perbadananstadium.my',
    phone: '+60 12-345 6799',
    role: 'Event Coordinator',
    department: 'Events',
    avatar: 'SN',
    status: 'active',
    hireDate: '2024-12-01',
    eventsManaged: 19,
    performanceScore: 4.6,
    lastActive: '2026-04-14',
    skills: ['Event Coordination', 'Timeline Management', 'Vendor Relations', 'Client Communication']
  },
  {
    id: 12,
    name: 'John Smith',
    email: 'john.smith@perbadananstadium.my',
    phone: '+60 12-345 6800',
    role: 'Audio Engineer',
    department: 'Technical',
    avatar: 'JS',
    status: 'active',
    hireDate: '2024-06-15',
    eventsManaged: 72,
    performanceScore: 4.8,
    lastActive: '2026-04-15',
    skills: ['Sound Engineering', 'Equipment Setup', 'Live Mixing', 'Acoustic Design']
  },
  {
    id: 13,
    name: 'Maria Fernandez',
    email: 'maria.fernandez@perbadananstadium.my',
    phone: '+60 12-345 6801',
    role: 'Marketing Manager',
    department: 'Marketing',
    avatar: 'MF',
    status: 'active',
    hireDate: '2024-04-20',
    eventsManaged: 45,
    performanceScore: 4.9,
    lastActive: '2026-04-14',
    skills: ['Strategic Planning', 'Brand Management', 'Digital Marketing', 'Team Leadership']
  },
  {
    id: 14,
    name: 'Tan Wei Ming',
    email: 'tan.weiming@perbadananstadium.my',
    phone: '+60 12-345 6802',
    role: 'Security Officer',
    department: 'Security',
    avatar: 'TW',
    status: 'active',
    hireDate: '2025-01-08',
    eventsManaged: 34,
    performanceScore: 4.4,
    lastActive: '2026-04-13',
    skills: ['Patrol Duties', 'Access Control', 'Incident Response', 'Report Writing']
  },
  {
    id: 15,
    name: 'Layla Hassan',
    email: 'layla.hassan@perbadananstadium.my',
    phone: '+60 12-345 6803',
    role: 'Customer Service Agent',
    department: 'Customer Service',
    avatar: 'LH',
    status: 'active',
    hireDate: '2025-03-22',
    eventsManaged: 18,
    performanceScore: 4.7,
    lastActive: '2026-04-15',
    skills: ['Phone Support', 'Email Management', 'Ticket Resolution', 'Customer Satisfaction']
  },
  {
    id: 16,
    name: 'Ramesh Nair',
    email: 'ramesh.nair@perbadananstadium.my',
    phone: '+60 12-345 6804',
    role: 'Accountant',
    department: 'Finance',
    avatar: 'RN',
    status: 'on-leave',
    hireDate: '2024-09-10',
    eventsManaged: 0,
    performanceScore: 4.5,
    lastActive: '2026-04-08',
    skills: ['Financial Reporting', 'Tax Compliance', 'Audit Preparation', 'Cost Analysis']
  },
  {
    id: 17,
    name: 'Emma Chen',
    email: 'emma.chen@perbadananstadium.my',
    phone: '+60 12-345 6805',
    role: 'Training Specialist',
    department: 'HR',
    avatar: 'EC',
    status: 'active',
    hireDate: '2024-10-15',
    eventsManaged: 0,
    performanceScore: 4.8,
    lastActive: '2026-04-14',
    skills: ['Training Development', 'Employee Onboarding', 'Performance Management', 'Coaching']
  },
  {
    id: 18,
    name: 'Michael Brown',
    email: 'michael.brown@perbadananstadium.my',
    phone: '+60 12-345 6806',
    role: 'Facilities Manager',
    department: 'Operations',
    avatar: 'MB',
    status: 'active',
    hireDate: '2024-01-25',
    eventsManaged: 89,
    performanceScore: 4.6,
    lastActive: '2026-04-15',
    skills: ['Facility Maintenance', 'Space Planning', 'Vendor Management', 'Budget Control']
  },
  {
    id: 19,
    name: 'Priya Sharma',
    email: 'priya.sharma@perbadananstadium.my',
    phone: '+60 12-345 6807',
    role: 'Social Media Manager',
    department: 'Marketing',
    avatar: 'PS',
    status: 'active',
    hireDate: '2025-02-10',
    eventsManaged: 28,
    performanceScore: 4.7,
    lastActive: '2026-04-13',
    skills: ['Content Creation', 'Community Management', 'Analytics', 'Campaign Execution']
  },
  {
    id: 20,
    name: 'Kevin Tan',
    email: 'kevin.tan@perbadananstadium.my',
    phone: '+60 12-345 6808',
    role: 'Sales Executive',
    department: 'Sales',
    avatar: 'KT',
    status: 'inactive',
    hireDate: '2024-11-28',
    eventsManaged: 42,
    performanceScore: 4.4,
    lastActive: '2026-03-20',
    skills: ['Lead Generation', 'Client Acquisition', 'Proposal Writing', 'Negotiation']
  }
];

const departments = ['All Departments', 'Events', 'Operations', 'Marketing', 'Security', 'Customer Service', 'Finance', 'HR', 'Technical', 'Sales'];
const roles = ['All Roles', 'Event Manager', 'Technical Lead', 'Marketing Coordinator', 'Security Supervisor', 'Customer Service Lead', 'Finance Officer', 'Logistics Manager', 'Human Resources', 'IT Specialist', 'Sales Representative', 'Event Coordinator', 'Audio Engineer', 'Marketing Manager', 'Security Officer', 'Customer Service Agent', 'Accountant', 'Training Specialist', 'Facilities Manager', 'Social Media Manager', 'Sales Executive'];

export default function Employees() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'on-leave' | 'inactive'>('all');
  const [employees, setEmployees] = useState(mockEmployees);

  // Load employees from localStorage on component mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
    if (storedEmployees.length > 0) {
      setEmployees([...mockEmployees, ...storedEmployees]);
    }
  }, []);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = searchQuery === '' ||
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment = departmentFilter === 'All Departments' || employee.department === departmentFilter;
    const matchesRole = roleFilter === 'All Roles' || employee.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || employee.status === statusFilter;

    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  });

  const handleDeleteEmployee = (employeeId: number) => {
    if (confirm('Are you sure you want to remove this employee? This action cannot be undone.')) {
      const updatedEmployees = employees.filter(employee => employee.id !== employeeId);
      setEmployees(updatedEmployees);

      // Update localStorage
      const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
      const updatedStoredEmployees = storedEmployees.filter((e: any) => e.id !== employeeId);
      localStorage.setItem('employees', JSON.stringify(updatedStoredEmployees));
    }
  };

  const handleEditEmployee = (employeeId: number) => {
    navigate(`/edit-employee/${employeeId}`);
  };

  const handleCreateEmployee = () => {
    navigate('/create-employee');
  };

  const activeEmployees = filteredEmployees.filter(e => e.status === 'active').length;
  const avgPerformance = filteredEmployees.reduce((sum, e) => sum + e.performanceScore, 0) / filteredEmployees.length || 0;

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      'on-leave': 'bg-yellow-100 text-yellow-700',
      inactive: 'bg-red-100 text-red-700'
    };
    const labels = {
      active: 'Active',
      'on-leave': 'On Leave',
      inactive: 'Inactive'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <DashboardLayout title="Employees">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Total Employees</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredEmployees.length}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#E11A27' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E11A27' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Active Employees</div>
              <div className="text-2xl font-bold" style={{ color: '#E11A27' }}>
                {activeEmployees}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#9F4091' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#9F4091' }}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">Avg Performance</div>
              <div className="text-2xl font-bold" style={{ color: '#9F4091' }}>
                {avgPerformance.toFixed(1)}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#273480' }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#273480' }}>
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-gray-600 text-sm">On Leave</div>
              <div className="text-2xl font-bold" style={{ color: '#273480' }}>
                {filteredEmployees.filter(e => e.status === 'on-leave').length}
              </div>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold" style={{ color: '#273480' }}>Team Members</h2>
          <button
            onClick={handleCreateEmployee}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors"
            style={{ backgroundColor: '#E11A27' }}
          >
            <Plus className="w-5 h-5" />
            Add Employee
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search employees by name, email, or role..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#273480' } as any}
              />
            </div>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#273480' } as any}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="on-leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
            <button
              onClick={() => {
                setSearchQuery('');
                setDepartmentFilter('All Departments');
                setRoleFilter('All Roles');
                setStatusFilter('all');
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Employee Grid */}
        {filteredEmployees.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#273480' }}>No employees found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Employee Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold text-white" style={{ backgroundColor: '#273480' }}>
                      {employee.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold" style={{ color: '#273480' }}>{employee.name}</h3>
                        {getStatusBadge(employee.status)}
                      </div>
                      <div className="text-sm text-gray-600">{employee.role}</div>
                      <div className="text-xs text-gray-500">{employee.department} Department</div>
                    </div>
                  </div>
                </div>

                {/* Employee Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Mail className="w-4 h-4" style={{ color: '#273480' }} />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Phone className="w-4 h-4" style={{ color: '#273480' }} />
                      <span>{employee.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Calendar className="w-4 h-4" style={{ color: '#273480' }} />
                      <span>Hired: {new Date(employee.hireDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <MapPin className="w-4 h-4" style={{ color: '#273480' }} />
                      <span>Last active: {employee.lastActive}</span>
                    </div>
                  </div>

                  {/* Performance & Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Events Managed</div>
                      <div className="text-xl font-bold" style={{ color: '#273480' }}>
                        {employee.eventsManaged}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Performance Score</div>
                      <div className="text-xl font-bold" style={{ color: employee.performanceScore >= 4.5 ? '#10B981' : '#273480' }}>
                        {employee.performanceScore.toFixed(1)}/5.0
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-600 mb-2">Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {employee.skills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#f3f3f5', color: '#273480' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEditEmployee(employee.id)}
                      className="flex-1 px-4 py-2 rounded-lg border-2 transition-colors text-sm"
                      style={{ borderColor: '#273480', color: '#273480' }}
                    >
                      <Edit className="w-4 h-4 inline mr-2" />
                      Edit Profile
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="px-4 py-2 rounded-lg border-2 border-red-200 text-red-600 hover:bg-red-50 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4 inline mr-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}