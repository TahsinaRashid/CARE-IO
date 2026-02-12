import React from 'react';
export function ServiceSkeleton() {
  return (
    <div className="border rounded-xl p-4">
      <div className="skeleton h-40 w-full mb-3"></div>
      <div className="skeleton h-5 w-3/4 mb-2"></div>
      <div className="skeleton h-4 w-1/2 mb-2"></div>
      <div className="skeleton h-4 w-full mb-2"></div>
      <div className="skeleton h-4 w-2/3"></div>
    </div>
  );
}
// import React from 'react';
// export function ServiceSkeleton() {
//   return (
//     <div className="animate-pulse bg-white/50 flex flex-col gap-4">
//       <div className=" h-48 w-full bg-gray-300 rounded-md"></div>
//       <div className=" h-6 w-3/4 bg-gray-300 rounded"></div>
//       <div className=" h-4 w-1/2 bg-gray-300 rounded"></div>
//       <div className=" h-6 w-1/3 bg-gray-300 rounded"></div>
//       <div className=" h-10 w-full bg-gray-300 rounded"></div>
//     </div>
//   );
// }

