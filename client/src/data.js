export const getReports = () => fetch(`/reports?state=OPEN`).then(x => x.json())

export const blockReport = (id) => fetch(`/reports/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    ticketState: "BLOCKED"
  })
})

export const resolveReport = (id) => fetch(`/reports/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify({
    ticketState: "CLOSED"
  })
})