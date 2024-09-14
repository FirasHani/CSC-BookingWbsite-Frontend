import React from 'react'

const tableData = [
  {
    name: 'store 1',
    title: 'good',
    employee:"firas",
    client:"client 1",
    email: 'musharof@example.com',
    role: 'Owner',
  },
  {
    name: 'store 1',
    title: 'good',
    employee:"firas",
    client:"client 1",
    email: 'musharof@example.com',
    role: 'Owner',
  },
  {
    name: 'store 1',
    title: 'good',
    employee:"firas",
    client:"client 1",
    email: 'musharof@example.com',
    role: 'Owner',
  },

]

const headers = [
  { name: 'Job Name', styles: 'min-w-[280px]' },
  { name: 'Desc', styles: 'min-w-[280px]' },
  { name: 'Client', styles: 'min-w-[280px]' },
  { name: 'Store', styles: 'min-w-[280px]' },
  { name: 'Employees', styles: 'min-w-[280px]' },
  { name: 'Action', styles: 'min-w-[140px]' },

]

const Table3 = () => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[30px]'>
  <a 
  href="/jobcreate" 
  className="inline-block" 
 
  rel="noopener noreferrer"
>
<button className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
Create Job
  </button>
</a>
      <div className='container mx-auto'>
      <div className="mb-16 text-center">
        <h2 className="mb-3 text-mid font-bold text-dark md:text-3xl">
        Jobs
        </h2>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-[1200px] px-4'>
            <div className='max-w-full overflow-x-auto bg-white dark:bg-dark-2 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.08)] rounded-xl'>
              <table className='w-full table-auto'>
                <TableHead headers={headers} />
                <TableBody data={tableData} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table3



const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='text-left bg-gray dark:bg-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`text-body-color dark:text-dark-7 py-4 px-4 first:pl-11 last:pr-11 text-base font-medium uppercase ${header.styles}`}
            key={index}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className='px-4 py-5 border-t border-stroke pl-11 dark:border-dark-3'>
            <h5 className='text-base text-body-color dark:text-dark-6'>
              {row.name}
            </h5>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.title}</p>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.client}</p>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.name}</p>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.employee}</p>
          </td>
          <td className='px-4 py-5 text-center border-t border-stroke pr-11 dark:border-dark-3'>
            <button className='text-base font-medium text-primary'>Edit</button>
          </td>
          <td className='px-4 py-5 text-center border-t border-stroke pr-11 dark:border-dark-3'>
            <button className='text-base font-medium text-primary'>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}