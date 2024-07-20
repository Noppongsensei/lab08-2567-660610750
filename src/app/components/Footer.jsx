import React from 'react'

export default function Footer(a) {
  return (
    <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2024 {a.name} {a.id}
        </p>
      </div>
  )
}