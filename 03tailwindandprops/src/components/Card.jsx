import React from 'react'

function Card({username='manas pohane', post="not assigned yet"}){
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://thepetlabco.com/learn/_next/image?url=https%3A%2F%2Fblog.thepetlabco.com%2Fwp-content%2Fuploads%2F2024%2F06%2Fshutterstock_2272555627-1.jpg&w=1920&q=75"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              autem.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card