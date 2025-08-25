import React, { useState } from 'react';
import './PlanB.css';

function PlanB() {
  const [activeTab, setActiveTab] = useState('medications');
  const [administrationLog, setAdministrationLog] = useState([
    {
      id: 1,
      medicationName: 'Insulin Lispro',
      dosage: '15 units',
      route: 'SC',
      administeredAt: '08/25/2025, 11:45 AM',
      administeredBy: 'Nurse Johnson',
      patient: 'John Smith',
      status: 'Administered',
      timestamp: new Date('2025-08-25T11:45:00').getTime(),
    },
    {
      id: 2,
      medicationName: 'Lisinopril',
      dosage: '10mg',
      route: 'PO',
      administeredAt: '08/25/2025, 09:15 AM',
      administeredBy: 'Nurse Wilson',
      patient: 'John Smith',
      status: 'Administered',
      timestamp: new Date('2025-08-25T09:15:00').getTime(),
    },
    {
      id: 3,
      medicationName: 'Omeprazole',
      dosage: '20mg',
      route: 'PO',
      administeredAt: '08/25/2025, 08:00 AM',
      administeredBy: 'Nurse Davis',
      patient: 'Jane Doe',
      status: 'Administered',
      timestamp: new Date('2025-08-25T08:00:00').getTime(),
    },
    {
      id: 4,
      medicationName: 'Metformin',
      dosage: '500mg',
      route: 'PO',
      administeredAt: '08/24/2025, 08:30 PM',
      administeredBy: 'Nurse Martinez',
      patient: 'Robert Lee',
      status: 'Administered',
      timestamp: new Date('2025-08-24T20:30:00').getTime(),
    },
    {
      id: 5,
      medicationName: 'Warfarin',
      dosage: '5mg',
      route: 'PO',
      administeredAt: '08/24/2025, 06:00 PM',
      administeredBy: 'Nurse Chen',
      patient: 'Jane Doe',
      status: 'Administered',
      timestamp: new Date('2025-08-24T18:00:00').getTime(),
    },
    {
      id: 6,
      medicationName: 'Atorvastatin',
      dosage: '40mg',
      route: 'PO',
      administeredAt: '08/24/2025, 08:00 AM',
      administeredBy: 'Nurse Thompson',
      patient: 'Robert Lee',
      status: 'Administered',
      timestamp: new Date('2025-08-24T08:00:00').getTime(),
    },
    {
      id: 7,
      medicationName: 'Aspirin',
      dosage: '81mg',
      route: 'PO',
      administeredAt: '08/23/2025, 07:00 AM',
      administeredBy: 'Nurse Brown',
      patient: 'John Smith',
      status: 'Administered',
      timestamp: new Date('2025-08-23T07:00:00').getTime(),
    },
    {
      id: 8,
      medicationName: 'Insulin Lispro',
      dosage: '15 units',
      route: 'SC',
      administeredAt: '08/23/2025, 12:30 PM',
      administeredBy: 'Nurse Wilson',
      patient: 'John Smith',
      status: 'Administered',
      timestamp: new Date('2025-08-23T12:30:00').getTime(),
    },
  ]);
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Cyanocobalamin injection',
      status: 'scheduled',
      dosage: '100mg',
      frequency: 'Twice daily',
      route: 'PO',
      nextDue: '09:00',
      prescribedBy: 'Dr. Chan',
      duration: '2025-08-15 to 2025-09-15',
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
      duration: '2025-08-10 to 2025-11-10',
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
      duration: '2025-08-20 to 2025-11-20',
    },
    {
      id: 4,
      name: 'Atorvastatin',
      status: 'scheduled',
      dosage: '40mg',
      frequency: 'Once daily',
      route: 'PO',
      nextDue: '20:00',
      prescribedBy: 'Dr. Smith',
      duration: '2025-08-01 to 2026-08-01',
    },
    {
      id: 5,
      name: 'Aspirin',
      status: 'overdue',
      dosage: '81mg',
      frequency: 'Once daily',
      route: 'PO',
      nextDue: '07:00',
      prescribedBy: 'Dr. Johnson',
      duration: '2025-07-15 to 2026-07-15',
    },
    {
      id: 6,
      name: 'Warfarin',
      status: 'scheduled',
      dosage: '5mg',
      frequency: 'Once daily',
      route: 'PO',
      nextDue: '18:00',
      prescribedBy: 'Dr. Brown',
      duration: '2025-08-01 to 2025-12-01',
    },
    {
      id: 7,
      name: 'Omeprazole',
      status: 'administered',
      dosage: '20mg',
      frequency: 'Once daily',
      route: 'PO',
      nextDue: '08:00',
      prescribedBy: 'Dr. Wilson',
      duration: '2025-08-05 to 2025-10-05',
    },
  ]);

  const handleAdminister = (id) => {
    setMedications((prevMedications) =>
      prevMedications.map((medication) =>
        medication.id === id
          ? { ...medication, status: 'administered' }
          : medication,
      ),
    );

    // Add to administration log
    const medication = medications.find((m) => m.id === id);
    if (medication) {
      const now = new Date();
      const logEntry = {
        id: Date.now(), // Simple ID generation
        medicationName: medication.name,
        dosage: medication.dosage,
        route: medication.route,
        administeredAt: now.toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
        administeredBy: 'Nurse Johnson', // This could be dynamic
        patient: 'John Smith', // This could be dynamic
        status: 'Administered',
        timestamp: now.getTime(), // For sorting
      };
      setAdministrationLog((prev) => [logEntry, ...prev]);
    }
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
            {medication.status !== 'administered' && (
              <button
                className={`btn ${getButtonClass(medication.status)}`}
                onClick={() => handleAdminister(medication.id)}
              >
                {getButtonText(medication.status)}
              </button>
            )}
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

  const renderAdministrationLogItem = (logEntry) => {
    // Extract time from administeredAt string
    const timeMatch = logEntry.administeredAt.match(/(\d{1,2}:\d{2}\s?[AP]M)/i);
    const time = timeMatch ? timeMatch[1] : '';

    return (
      <div key={logEntry.id} className='administration-log-item'>
        <div className='log-time'>{time}</div>
        <div className='log-content'>
          <div className='log-title'>
            {logEntry.medicationName} - {logEntry.dosage}
          </div>
          <div className='log-description'>
            Administered by {logEntry.administeredBy}
          </div>
          <div className='log-meta'>
            Route: {logEntry.route} | Patient: {logEntry.patient}
          </div>
        </div>
        <div className='log-status'>
          <span className='status-badge status-administered'>
            {logEntry.status}
          </span>
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
          className={`tab ${activeTab === 'administrationLog' ? 'active' : ''}`}
          onClick={() => setActiveTab('administrationLog')}
        >
          Administration Log
        </button>
      </div>

      <div className='content'>
        {activeTab === 'medications' && (
          <div className='medications-list'>
            {medications.map(renderMedicationCard)}
          </div>
        )}

        {activeTab === 'administrationLog' && (
          <div
            style={{ gap: '24px', display: 'flex', flexDirection: 'column' }}
          >
            {(() => {
              // Group administration logs by date
              const groupedLogs = administrationLog.reduce((groups, log) => {
                const date = log.administeredAt.split(',')[0]; // Extract date part
                if (!groups[date]) {
                  groups[date] = [];
                }
                groups[date].push(log);
                return groups;
              }, {});

              // Sort dates in descending order (newest first)
              const sortedDates = Object.keys(groupedLogs).sort((a, b) => {
                const dateA = new Date(a);
                const dateB = new Date(b);
                return dateB - dateA;
              });

              // Convert date to HK format and check if it's today
              const formatDateForDisplay = (dateStr) => {
                const [month, day, year] = dateStr.split('/');
                const hkFormat = `${day}/${month}/${year}`;
                
                // Check if it's today (25/08/2025)
                const today = new Date();
                const todayStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
                
                return hkFormat === todayStr ? 'Today' : hkFormat;
              };

              return sortedDates.map(date => (
                <div key={date} className='administration-log'>
                  <div className='administration-log-header'>
                    <h2>Administration Log - {formatDateForDisplay(date)}</h2>
                  </div>
                  <div className='administration-log-list'>
                    {groupedLogs[date]
                      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
                      .map(renderAdministrationLogItem)}
                  </div>
                </div>
              ));
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlanB;
