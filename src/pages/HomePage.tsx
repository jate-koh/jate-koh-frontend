
import { Box } from '@/components/common/Box';
import NavigationBar from '@/components/navbar/Navbar';

export function HomePage() {
    return (
        <div>
            <NavigationBar />
            <div className='mt-10 relative flex flex-row flex-wrap gap-2 justify-center'>
                
                <Box colorSet='primary' basis='basis-1/4' className='animate-fade-float-in'>
                    <h1 className='dashie-red text-3xl'>01</h1>
                </Box>

                <Box colorSet='secondary' basis='basis-1/2' className='animate-fade-float-in-1'>
                    <h1 className='dashie-red text-3xl'>02</h1>
                </Box>

                <Box colorSet='tertiary' basis='basis-1/4' className='animate-fade-float-in-2'>
                    <h1 className='dashie-red text-3xl'>03</h1>
                </Box>

                <Box colorSet='quaternary' basis='basis-1/3' className='animate-fade-float-in-1'>
                    <h1 className='dashie-red text-3xl'>04</h1>
                </Box>

                
                {/* <div className='main-box-b2 basis-1/4'>
                    <h1 className='dashie-red text-3xl '>01</h1>
                </div>

                <div className='main-box-b1 basis-1/3'>
                    <h1 className='dashie-red text-3xl'>01</h1>
                </div>

                <div className='main-box-b3 basis-1/4'>
                    <h1 className='dashie-red text-3xl'>01</h1>
                </div>

                <div className='main-box-b4 basis-1/4'>
                    <h1 className='dashie-red text-3xl'>01</h1>
                </div> */}

            </div>
        
        </div>
    );
}
