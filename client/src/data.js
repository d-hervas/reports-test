export const getReports = () => fetch('/reports').then(x => x.json()).then(x => x.elements)

export const blockReport = (id) => fetch(`/reports/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    ticketState: "BLOCKED"
  })
}).then(x => x.json())

export const resolveReport = (id) => fetch(`/reports/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    ticketState: "CLOSED"
  })
}).then(x => x.json())