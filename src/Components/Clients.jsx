import React from 'react'
import ClientSmall from './ClientsSmall'
import ClientLarge from './ClientLarge'

function Clients() {
  return (
    <div>
      {/* Visible only on screens smaller than md */}
      <div className="block md:hidden">
        <ClientSmall />
      </div>

      {/* Visible only on screens md and larger */}
      <div className="hidden md:block">
        <ClientLarge />
      </div>
    </div>
  )
}

export default Clients