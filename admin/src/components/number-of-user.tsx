import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
// import { name,number,growth } from "../../../public/Data/data";

const NumberOfUser = ({name,number,growth}: any) => {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mr-5 ml-5 mb-5'>
        <Card className='min-w-[350px]'>
            <CardHeader className='flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row'>
                <div className='grid flex-1 gap-0 text-center sm:text-left justify-end'>
                    <CardDescription className=' text-black text-right text-3xl'>
                        {name}
                    </CardDescription>
                    <CardTitle className='text-3xl text-right'>
                        {number}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
                <p className='text-gray-600'><span className='text-green-700 font-bold text-lg'>{growth}% </span> than last week</p>
            </CardContent>
        </Card>
    </div>
  )
}

export default NumberOfUser