import React from 'react'

export default function Category() {
    return (
        <div>
            <label htmlFor="category">Category</label>
            <select id="category">
              <option value="">Choose a category</option>
              <option value="1">Animals</option>
              <option value="2">Arts, Culture, Humanities</option>
              <option value="3">Education</option>
              <option value="4">Environment</option>
              <option value="5">Health</option>
              <option value="6">Human Services</option>
              <option value="7">International</option>
              <option value="8">Human and Civil Rights</option>
              <option value="9">Religion</option>
              <option value="10">Community Development</option>
              <option value="11">Research and Public Policy</option>
            </select>
        </div>
    )
}
