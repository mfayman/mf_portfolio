import React from 'react';
import WorkItem from '../components/WorkItem';
import Portfolio from '../assets/portfolio.png';
import TravelAdvisor from '../assets/travelAdvisor.png';
import Cryptoverse from '../assets/cryptoverse.png';
import RealEstate from '../assets/realEstate.png';
import FoodOrder from '../assets/foodOrder.png';
import ExpenseTracker from '../assets/expenseTracker.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:min-h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
        <div className='pb-8 pt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#9C6700]'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <WorkItem itemName='This Portfolio' itemImg={Portfolio} demoLink='' codeLink='https://github.com/mfayman/mf_portfolio' />
          <WorkItem itemName='Travel Advisor' itemImg={TravelAdvisor} demoLink='https://mf-travel-advisor.netlify.app/' codeLink='https://github.com/mfayman/mf_traveladvisor' />
          <WorkItem itemName='Crypto App' itemImg={Cryptoverse} demoLink='https://mf-cryptoverse.netlify.app/' codeLink='https://github.com/mfayman/mf_cryptoverse' />
          <WorkItem itemName='Real Estate App' itemImg={RealEstate} demoLink='https://mf-realestate.vercel.app/' codeLink='https://github.com/mfayman/mf_realestate' />
          <WorkItem itemName='Food Ordering App' itemImg={FoodOrder} demoLink='https://mf-food-order.netlify.app/' codeLink='https://github.com/mfayman/mf_foodorder' />
          <WorkItem itemName='Simple Expense Tracker' itemImg={ExpenseTracker} demoLink='https://mf-expense-tracker.netlify.app/' codeLink='https://github.com/mfayman/mf_expensetracker' />
        </div>
      </div>
    </div>
  );
};

export default Work;