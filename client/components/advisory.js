import React from 'react'

export default function Advisory() {
    return (
        <div>
            <label htmlFor="advisory">Advisory</label>
            <select id="category">
              <option value="">Choose an Advisory</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
        </div>
    )
}
