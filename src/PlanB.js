import React, { useState } from "react";
import "./PlanB.css";

function PlanB() {
  const [activeTab, setActiveTab] = useState("medications");
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 7, 25)); // August 25, 2025
  const [administrationLog, setAdministrationLog] = useState([
    // August 24, 2025 administered medications
    {
      id: 1,
      medicationName: "Insulin Lispro",
      dosage: "15 units",
      route: "SC",
      administeredAt: "08/24/2025, 11:45 AM",
      administeredBy: "Nurse Johnson",
      patient: "John Smith",
      status: "Administered",
      timestamp: new Date("2025-08-24T11:45:00").getTime(),
    },
    {
      id: 2,
      medicationName: "Lisinopril",
      dosage: "10mg",
      route: "PO",
      administeredAt: "08/24/2025, 09:15 AM",
      administeredBy: "Nurse Wilson",
      patient: "John Smith",
      status: "Administered",
      timestamp: new Date("2025-08-24T09:15:00").getTime(),
    },
    {
      id: 3,
      medicationName: "Metformin",
      dosage: "500mg",
      route: "PO",
      administeredAt: "08/24/2025, 08:30 PM",
      administeredBy: "Nurse Martinez",
      patient: "Robert Lee",
      status: "Administered",
      timestamp: new Date("2025-08-24T20:30:00").getTime(),
    },

    // August 25, 2025 administered medications (Today)
    {
      id: 4,
      medicationName: "Omeprazole",
      dosage: "20mg",
      route: "PO",
      administeredAt: "08/25/2025, 08:00 AM",
      administeredBy: "Nurse Davis",
      patient: "Jane Doe",
      status: "Administered",
      timestamp: new Date("2025-08-25T08:00:00").getTime(),
    },
    {
      id: 5,
      medicationName: "Warfarin",
      dosage: "5mg",
      route: "PO",
      administeredAt: "08/25/2025, 06:00 PM",
      administeredBy: "Nurse Chen",
      patient: "Jane Doe",
      status: "Administered",
      timestamp: new Date("2025-08-25T18:00:00").getTime(),
    },
    {
      id: 6,
      medicationName: "Cyanocobalamin injection",
      dosage: "100mg",
      route: "PO",
      administeredAt: "08/25/2025, 09:30 AM",
      administeredBy: "Nurse Thompson",
      patient: "Robert Lee",
      status: "Administered",
      timestamp: new Date("2025-08-25T09:30:00").getTime(),
    },

    // August 26, 2025 administered medications
    {
      id: 7,
      medicationName: "Clopidogrel",
      dosage: "75mg",
      route: "PO",
      administeredAt: "08/26/2025, 07:00 AM",
      administeredBy: "Nurse Brown",
      patient: "John Smith",
      status: "Administered",
      timestamp: new Date("2025-08-26T07:00:00").getTime(),
    },
    {
      id: 8,
      medicationName: "Simvastatin",
      dosage: "20mg",
      route: "PO",
      administeredAt: "08/26/2025, 12:30 PM",
      administeredBy: "Nurse Wilson",
      patient: "John Smith",
      status: "Administered",
      timestamp: new Date("2025-08-26T12:30:00").getTime(),
    },
    {
      id: 9,
      medicationName: "Amlodipine",
      dosage: "5mg",
      route: "PO",
      administeredAt: "08/26/2025, 08:15 AM",
      administeredBy: "Nurse Garcia",
      patient: "Jane Doe",
      status: "Administered",
      timestamp: new Date("2025-08-26T08:15:00").getTime(),
    },
    {
      id: 10,
      medicationName: "Losartan",
      dosage: "50mg",
      route: "PO",
      administeredAt: "08/26/2025, 09:45 AM",
      administeredBy: "Nurse Kim",
      patient: "Robert Lee",
      status: "Administered",
      timestamp: new Date("2025-08-26T09:45:00").getTime(),
    },
  ]);

  // Medications data with 3 specific date ranges for demonstration
  const [medications, setMedications] = useState([
    // August 24, 2025 medications
    {
      id: 1,
      name: "Metformin",
      status: "scheduled",
      dosage: "500mg",
      frequency: "Twice daily",
      route: "PO",
      nextDue: "08:30",
      prescribedBy: "Dr. Wong",
      duration: "2025-08-24 to 2025-08-24",
    },
    {
      id: 2,
      name: "Insulin Lispro",
      status: "overdue",
      dosage: "15 units",
      frequency: "Before meals",
      route: "SC",
      nextDue: "12:00",
      prescribedBy: "Dr. Cheung",
      duration: "2025-08-24 to 2025-08-24",
    },
    {
      id: 3,
      name: "Lisinopril",
      status: "administered",
      dosage: "10mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "09:00",
      prescribedBy: "Dr. Martinez",
      duration: "2025-08-24 to 2025-08-24",
    },

    // August 25, 2025 medications (Today)
    {
      id: 4,
      name: "Cyanocobalamin injection",
      status: "scheduled",
      dosage: "100mg",
      frequency: "Twice daily",
      route: "PO",
      nextDue: "09:00",
      prescribedBy: "Dr. Chan",
      duration: "2025-08-25 to 2025-08-25",
    },
    {
      id: 5,
      name: "Atorvastatin",
      status: "scheduled",
      dosage: "40mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "20:00",
      prescribedBy: "Dr. Smith",
      duration: "2025-08-25 to 2025-08-25",
    },
    {
      id: 6,
      name: "Aspirin",
      status: "overdue",
      dosage: "81mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "07:00",
      prescribedBy: "Dr. Johnson",
      duration: "2025-08-25 to 2025-08-25",
    },
    {
      id: 7,
      name: "Warfarin",
      status: "scheduled",
      dosage: "5mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "18:00",
      prescribedBy: "Dr. Brown",
      duration: "2025-08-25 to 2025-08-25",
    },
    {
      id: 8,
      name: "Omeprazole",
      status: "administered",
      dosage: "20mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "08:00",
      prescribedBy: "Dr. Wilson",
      duration: "2025-08-25 to 2025-08-25",
    },

    // August 26, 2025 medications
    {
      id: 9,
      name: "Simvastatin",
      status: "scheduled",
      dosage: "20mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "21:00",
      prescribedBy: "Dr. Garcia",
      duration: "2025-08-26 to 2025-08-26",
    },
    {
      id: 10,
      name: "Amlodipine",
      status: "scheduled",
      dosage: "5mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "08:00",
      prescribedBy: "Dr. Lee",
      duration: "2025-08-26 to 2025-08-26",
    },
    {
      id: 11,
      name: "Furosemide",
      status: "overdue",
      dosage: "40mg",
      frequency: "Twice daily",
      route: "PO",
      nextDue: "10:00",
      prescribedBy: "Dr. Kim",
      duration: "2025-08-26 to 2025-08-26",
    },
    {
      id: 12,
      name: "Losartan",
      status: "scheduled",
      dosage: "50mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "09:30",
      prescribedBy: "Dr. Patel",
      duration: "2025-08-26 to 2025-08-26",
    },
    {
      id: 13,
      name: "Clopidogrel",
      status: "administered",
      dosage: "75mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "08:00",
      prescribedBy: "Dr. Zhang",
      duration: "2025-08-26 to 2025-08-26",
    },
    {
      id: 14,
      name: "Digoxin",
      status: "scheduled",
      dosage: "0.25mg",
      frequency: "Once daily",
      route: "PO",
      nextDue: "09:00",
      prescribedBy: "Dr. Anderson",
      duration: "2025-08-26 to 2025-08-26",
    },
  ]);

  const handleAdminister = (id) => {
    setMedications((prevMedications) =>
      prevMedications.map((medication) =>
        medication.id === id
          ? { ...medication, status: "administered" }
          : medication
      )
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
        administeredAt: now.toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        administeredBy: "Nurse Johnson", // This could be dynamic
        patient: "John Smith", // This could be dynamic
        status: "Administered",
        timestamp: now.getTime(), // For sorting
      };
      setAdministrationLog((prev) => [logEntry, ...prev]);
    }
  };

  // Function to get all unique dates that have active medications
  const getAvailableDates = () => {
    const dateSet = new Set();

    medications.forEach((medication) => {
      const durationParts = medication.duration.split(" to ");
      if (durationParts.length === 2) {
        const startDate = new Date(durationParts[0]);
        const endDate = new Date(durationParts[1]);

        // Generate all dates within the medication's duration
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          dateSet.add(currentDate.toISOString().split("T")[0]);
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });

    return Array.from(dateSet).sort();
  };

  // Function to filter medications based on selected date
  const getFilteredMedications = () => {
    return medications.filter((medication) => {
      // Parse the duration string (e.g., "2025-08-15 to 2025-09-15")
      const durationParts = medication.duration.split(" to ");
      if (durationParts.length !== 2) return true; // Show if duration format is invalid

      const startDate = new Date(durationParts[0]);
      const endDate = new Date(durationParts[1]);
      
      // Normalize dates to compare only the date part (not time)
      const selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
      const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

      // Check if selected date falls within the medication's duration
      return selectedDateOnly >= startDateOnly && selectedDateOnly <= endDateOnly;
    });
  };

  // Format date for display in dropdown
  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    const today = new Date(2025, 7, 25); // August 25, 2025

    if (date.toDateString() === today.toDateString()) {
      return "Today (25/08/2025)";
    }

    return `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;
  };

  // Format date for selector value
  const formatDateForSelector = (date) => {
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format for input
  };

  const renderMedicationCard = (medication) => {
    const getStatusClass = (status) => {
      switch (status) {
        case "scheduled":
          return "status-scheduled";
        case "overdue":
          return "status-overdue";
        case "administered":
          return "status-administered";
        default:
          return "";
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case "scheduled":
          return "Scheduled";
        case "overdue":
          return "Overdue";
        case "administered":
          return "Administered";
        default:
          return "";
      }
    };

    const getButtonText = (status) => {
      switch (status) {
        case "scheduled":
          return "Administer";
        case "overdue":
          return "Administer (Overdue)";
        case "administered":
          return "Edit";
        default:
          return "Edit";
      }
    };

    const getButtonClass = (status) => {
      switch (status) {
        case "scheduled":
          return "btn-administer";
        case "overdue":
          return "btn-overdue";
        case "administered":
          return "btn-edit";
        default:
          return "btn-edit";
      }
    };

    return (
      <div key={medication.id} className="medication-card">
        <div className="medication-header">
          <div className="medication-name-status">
            <span className="medication-name">{medication.name}</span>
            <span
              className={`status-badge ${getStatusClass(medication.status)}`}
            >
              {getStatusText(medication.status)}
            </span>
          </div>
          <div className="medication-actions">
            {medication.status !== "administered" && (
              <button
                className={`btn ${getButtonClass(medication.status)}`}
                onClick={() => handleAdminister(medication.id)}
              >
                {getButtonText(medication.status)}
              </button>
            )}
            <button className="btn btn-edit">History</button>
          </div>
        </div>

        <div className="medication-details">
          <div className="detail-row">
            <div className="detail-group">
              <span className="label">Dosage</span>
              <span className="value">{medication.dosage}</span>
            </div>
            <div className="detail-group">
              <span className="label">Frequency</span>
              <span className="value">{medication.frequency}</span>
            </div>
            <div className="detail-group">
              <span className="label">Route</span>
              <span className="value">{medication.route}</span>
            </div>
            <div className="detail-group">
              <span className="label">Next Due</span>
              <span className="value">{medication.nextDue}</span>
            </div>
          </div>

          <div className="medication-meta">
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
    const time = timeMatch ? timeMatch[1] : "";

    return (
      <div key={logEntry.id} className="administration-log-item">
        <div className="log-time">{time}</div>
        <div className="log-content">
          <div className="log-title">
            {logEntry.medicationName} - {logEntry.dosage}
          </div>
          <div className="log-description">
            Administered by {logEntry.administeredBy}
          </div>
          <div className="log-meta">
            Route: {logEntry.route} | Patient: {logEntry.patient}
          </div>
        </div>
        <div className="log-status">
          <span className="status-badge status-administered">
            {logEntry.status}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "medications" ? "active" : ""}`}
          onClick={() => setActiveTab("medications")}
        >
          Medications
        </button>
        <button
          className={`tab ${activeTab === "administrationLog" ? "active" : ""}`}
          onClick={() => setActiveTab("administrationLog")}
        >
          Weekly Timetable
        </button>
        <button
          className={`tab ${activeTab === "logList" ? "active" : ""}`}
          onClick={() => setActiveTab("logList")}
        >
          Administration Log
        </button>
      </div>

      <div className="content">
        {activeTab === "medications" && (
          <div>
            <div className="medications-header">
              <h2>Medications</h2>
              <div className="date-selector">
                <label htmlFor="medication-date">Filter by Date:</label>
                <select
                  id="medication-date"
                  value={formatDateForSelector(selectedDate)}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="date-select"
                >
                  {getAvailableDates().map((dateString) => (
                    <option key={dateString} value={dateString}>
                      {formatDateForDisplay(dateString)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="medications-list">
              {getFilteredMedications().map(renderMedicationCard)}
            </div>
          </div>
        )}

        {activeTab === "administrationLog" && (
          <div className="weekly-timetable-container">
            {(() => {
              // Generate current week dates
              const today = new Date(2025, 7, 25); // August 25, 2025
              const startOfWeek = new Date(today);
              const dayOfWeek = today.getDay();
              const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
              startOfWeek.setDate(today.getDate() + mondayOffset);

              const weekDays = [];
              for (let i = 0; i < 7; i++) {
                const day = new Date(startOfWeek);
                day.setDate(startOfWeek.getDate() + i);
                weekDays.push(day);
              }

              // Time slots for the timetable (6 AM to 10 PM)
              const timeSlots = [];
              for (let hour = 6; hour <= 22; hour++) {
                timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
              }

              // Group logs by date and time
              const weeklyLogs = {};
              administrationLog.forEach((log) => {
                const logDate = new Date(log.timestamp);
                const dateKey = `${logDate.getFullYear()}-${String(
                  logDate.getMonth() + 1
                ).padStart(2, "0")}-${String(logDate.getDate()).padStart(
                  2,
                  "0"
                )}`;
                const timeKey = `${String(logDate.getHours()).padStart(
                  2,
                  "0"
                )}:00`;

                if (!weeklyLogs[dateKey]) {
                  weeklyLogs[dateKey] = {};
                }
                if (!weeklyLogs[dateKey][timeKey]) {
                  weeklyLogs[dateKey][timeKey] = [];
                }
                weeklyLogs[dateKey][timeKey].push(log);
              });

              const getDayName = (date) => {
                const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                return days[date.getDay()];
              };

              const formatDate = (date) => {
                return `${String(date.getDate()).padStart(2, "0")}/${String(
                  date.getMonth() + 1
                ).padStart(2, "0")}`;
              };

              const isToday = (date) => {
                return date.toDateString() === today.toDateString();
              };

              return (
                <div className="weekly-timetable">
                  <div className="timetable-header">
                    <h2>Weekly Medication Timetable</h2>
                    <div className="week-navigation">
                      Week of {formatDate(weekDays[0])} -{" "}
                      {formatDate(weekDays[6])}
                    </div>
                  </div>

                  <div className="timetable-grid">
                    {/* Header row with days */}
                    <div className="time-header">Time</div>
                    {weekDays.map((day, index) => (
                      <div
                        key={index}
                        className={`day-header ${isToday(day) ? "today" : ""}`}
                      >
                        <div className="day-name">{getDayName(day)}</div>
                        <div className="day-date">{formatDate(day)}</div>
                      </div>
                    ))}

                    {/* Time slots and medication entries */}
                    {timeSlots.map((timeSlot) => (
                      <React.Fragment key={timeSlot}>
                        <div className="time-slot">{timeSlot}</div>
                        {weekDays.map((day, dayIndex) => {
                          const dateKey = `${day.getFullYear()}-${String(
                            day.getMonth() + 1
                          ).padStart(2, "0")}-${String(day.getDate()).padStart(
                            2,
                            "0"
                          )}`;
                          const logs = weeklyLogs[dateKey]?.[timeSlot] || [];

                          return (
                            <div
                              key={`${timeSlot}-${dayIndex}`}
                              className={`timetable-cell ${
                                isToday(day) ? "today-column" : ""
                              }`}
                            >
                              {logs.map((log) => (
                                <div key={log.id} className="medication-entry">
                                  <div className="medication-name">
                                    {log.medicationName}
                                  </div>
                                  <div className="medication-dosage">
                                    {log.dosage}
                                  </div>
                                  <div className="medication-nurse">
                                    {log.administeredBy}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === "logList" && (
          <div
            style={{ gap: "24px", display: "flex", flexDirection: "column" }}
          >
            {(() => {
              // Group administration logs by date
              const groupedLogs = administrationLog.reduce((groups, log) => {
                const date = log.administeredAt.split(",")[0]; // Extract date part
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
                const [month, day, year] = dateStr.split("/");
                const hkFormat = `${day}/${month}/${year}`;

                // Check if it's today (25/08/2025)
                const today = new Date();
                const todayStr = `${String(today.getDate()).padStart(
                  2,
                  "0"
                )}/${String(today.getMonth() + 1).padStart(
                  2,
                  "0"
                )}/${today.getFullYear()}`;

                return hkFormat === todayStr ? "Today" : hkFormat;
              };

              return sortedDates.map((date) => (
                <div key={date} className="administration-log">
                  <div className="administration-log-header">
                    <h2>Administration Log - {formatDateForDisplay(date)}</h2>
                  </div>
                  <div className="administration-log-list">
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
