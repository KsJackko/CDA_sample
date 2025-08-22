import React, { useState } from 'react';
import './PlanB.css';

function PlanB() {
  const [activeTab, setActiveTab] = useState('medications');

  const scheduleItems = [
    {
      id: 1,
      time: '08:00',
      title: 'Medication Review',
      description: 'Check scheduled medications for all patients',
      status: 'pending',
    },
    {
      id: 2,
      time: '09:00',
      title: 'Medication Review',
      description: 'Check scheduled medications for all patients',
      status: 'pending',
    },
    {
      id: 3,
      time: '12:00',
      title: 'Medication Review',
      description: 'Check scheduled medications for all patients',
      status: 'pending',
    },
    {
      id: 4,
      time: '17:00',
      title: 'Medication Review',
      description: 'Check scheduled medications for all patients',
      status: 'pending',
    },
    {
      id: 5,
      time: '21:00',
      title: 'Medication Review',
      description: 'Check scheduled medications for all patients',
      status: 'pending',
    },
  ];

  const medications = [
    {
      id: 1,
      name: 'Lisinopril',
      status: 'scheduled',
      dosage: '10mg',
      frequency: 'Once daily',
      route: 'PO',
      nextDue: '09:00',
      prescribedBy: 'Dr. Chan',
      duration: '2025-01-15 to 2025-02-15',
    },
    {
      id: 2,
      name: 'Metformin',
      status: 'overdue',
      dosage: '500mg',
      frequency: 'Twice daily',
      route: 'PO',
      nextDue: '08:30',
      prescribedBy: 'Dr. Wong',
      duration: '2025-01-10 to 2025-03-10',
    },
    {
      id: 3,
      name: 'Insulin Lispro',
      status: 'administered',
      dosage: '15 units',
      frequency: 'Before meals',
      route: 'SC',
      nextDue: '12:00',
      prescribedBy: 'Dr. Cheung',
      duration: '2025-01-20 to 2025-04-20',
    },
    {
      id: 4,
      name: 'Insulin Lispro',
      status: 'administered',
      dosage: '15 units',
      frequency: 'Before meals',
      route: 'SC',
      nextDue: '12:00',
      prescribedBy: 'Dr. Cheung',
      duration: '2025-01-20 to 2025-04-20',
    },
    {
      id: 5,
      name: 'Insulin Lispro',
      status: 'administered',
      dosage: '15 units',
      frequency: 'Before meals',
      route: 'SC',
      nextDue: '12:00',
      prescribedBy: 'Dr. Cheung',
      duration: '2025-01-20 to 2025-04-20',
    },
    {
      id: 6,
      name: 'Insulin Lispro',
      status: 'administered',
      dosage: '15 units',
      frequency: 'Before meals',
      route: 'SC',
      nextDue: '12:00',
      prescribedBy: 'Dr. Cheung',
      duration: '2025-01-20 to 2025-04-20',
    },
    {
      id: 7,
      name: 'Insulin Lispro',
      status: 'administered',
      dosage: '15 units',
      frequency: 'Before meals',
      route: 'SC',
      nextDue: '12:00',
      prescribedBy: 'Dr. Cheung',
      duration: '2025-01-20 to 2025-04-20',
    },
  ];

  const renderScheduleItem = (item) => {
    return (
      <div key={item.id} className='schedule-item'>
        <div className='schedule-time'>{item.time}</div>
        <div className='schedule-content'>
          <div className='schedule-title'>{item.title}</div>
          <div className='schedule-description'>{item.description}</div>
        </div>
        <div className='schedule-status'>
          <span className='status-badge status-pending'>Pending</span>
        </div>
      </div>
    );
  };

  const renderMedicationCard = (medication) => {
    const getStatusClass = (status) => {
      switch (status) {
        case 'scheduled':
          return 'status-scheduled';
        case 'overdue':
          return 'status-overdue';
        case 'administered':
          return 'status-administered';
        default:
          return '';
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case 'scheduled':
          return 'Scheduled';
        case 'overdue':
          return 'Overdue';
        case 'administered':
          return 'Administered';
        default:
          return '';
      }
    };

    const getButtonText = (status) => {
      switch (status) {
        case 'scheduled':
          return 'Administer';
        case 'overdue':
          return 'Administer (Overdue)';
        case 'administered':
          return 'Edit';
        default:
          return 'Edit';
      }
    };

    const getButtonClass = (status) => {
      switch (status) {
        case 'scheduled':
          return 'btn-administer';
        case 'overdue':
          return 'btn-overdue';
        case 'administered':
          return 'btn-edit';
        default:
          return 'btn-edit';
      }
    };

    return (
      <div key={medication.id} className='medication-card'>
        <div className='medication-header'>
          <div className='medication-name-status'>
            <span className='edit-icon'>✏️</span>
            <span className='medication-name'>{medication.name}</span>
            <span
              className={`status-badge ${getStatusClass(medication.status)}`}
            >
              {getStatusText(medication.status)}
            </span>
          </div>
          <div className='medication-actions'>
            <button className={`btn ${getButtonClass(medication.status)}`}>
              {getButtonText(medication.status)}
            </button>
            <button className='btn btn-edit'>Edit</button>
          </div>
        </div>

        <div className='medication-details'>
          <div className='detail-row'>
            <div className='detail-group'>
              <span className='label'>Dosage</span>
              <span className='value'>{medication.dosage}</span>
            </div>
            <div className='detail-group'>
              <span className='label'>Frequency</span>
              <span className='value'>{medication.frequency}</span>
            </div>
            <div className='detail-group'>
              <span className='label'>Route</span>
              <span className='value'>{medication.route}</span>
            </div>
            <div className='detail-group'>
              <span className='label'>Next Due</span>
              <span className='value'>{medication.nextDue}</span>
            </div>
          </div>

          <div className='medication-meta'>
            <div>Prescribed by: {medication.prescribedBy}</div>
            <div>Duration: {medication.duration}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='app'>
      <div className='tabs'>
        <button
          className={`tab ${activeTab === 'medications' ? 'active' : ''}`}
          onClick={() => setActiveTab('medications')}
        >
          Medications
        </button>
        <button
          className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          Schedule
        </button>
      </div>

      <div className='content'>
        {activeTab === 'medications' && (
          <div className='medications-list'>
            {medications.map(renderMedicationCard)}
          </div>
        )}

        {activeTab === 'administration' && (
          <div className='administration-log'>
            <p>Administration log content would go here...</p>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div
            style={{ gap: '24px', display: 'flex', flexDirection: 'column' }}
          >
            <div className='schedule'>
              <div className='schedule-header'>
                <h2>Today's Schedule</h2>
              </div>
              <div className='schedule-list'>
                {scheduleItems.map(renderScheduleItem)}
              </div>
            </div>
            <div className='schedule'>
              <div className='schedule-header'>
                <h2>21/8/2025 Schedule</h2>
              </div>
              <div className='schedule-list'>
                {scheduleItems.map(renderScheduleItem)}
              </div>
            </div>
            <div className='schedule'>
              <div className='schedule-header'>
                <h2>01/08/2025 Schedule</h2>
              </div>
              <div className='schedule-list'>
                {scheduleItems.map(renderScheduleItem)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanB;
