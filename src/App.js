import './App.css';
import {BrowserRouter as Router, Routes, Route} from'react-router-dom';

import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Popular from './Components/Popular';
import MsgAns from './Pages/MsgAns';
import Tags from './Pages/Tags';
import TermsCondition from './Pages/TermsConditions';
import Help from './Pages/Help';
import Slide1 from './Components/Slide1';
import RecentQuestion from './Pages/RecentQuestion';
import BumpQuestion from './Pages/BumpQuestion';
import MostVisited from './Pages/MostVisited';
import MostAnswered from './Pages/MostAnswered';
import HomeMsgAns from './Pages/HomeMsgAns';
import Company from './Pages/Company';
import CompanyProfile from './Pages/CompaniesProfile';
import AskQuestion from './Pages/AskQuestion';
import UserProfile from './Pages/UserProfile';
import UserQuestion from './Pages/UserQuestion';
import UserAnswer from './Pages/UserAnswer';
import AddGroup from './Pages/AddGroup';
import EditGroup from './Pages/EditGroup';
import Polls from './Pages/Polls';
import GroupDetail from './Components/GroupDetail';
import GroupPosts from './Pages/GroupPosts';
import AnswersGiven from './Components/AnswersGiven';
import Analytics from './Pages/Analytics';
import AnswerComponent from './Components/AnswerComponent';
import ComingSoon from './Coming/ComingSoon';
import Sector from './Pages/SectorCompanies'
import Warn from './Components/Warn';
import TermsAndCondition from "./Pages/TermsAndCondition";
import Agreement from "./Pages/Agreement";
import UserPolicy from "./Pages/UserPolicy";
import Forget from "./Pages/Forget";
import Password from "./Pages/Password";
import MostCommented from './Components/MostCommented';

function App() {
  return (
    <>
    
    <Router>

    
   <Routes> 
   <Route path='/coming' element={ <ComingSoon/>}/>{/* done */}
   <Route path='/' element={ <Home/>}/>{/* done */}
   <Route path='/signin'   element={ <Signin/> }/>
   <Route path='/signup'   element={ <Signup/> }/>
<Route path='/popular' element={ <Popular/> }/>
<Route path='/answerd' element={ <MsgAns/> }/>
<Route path='/messageanswer' element={ <HomeMsgAns/> }/>
<Route path='/tags' element={ <Tags/> }/>
<Route path='/termandconditions' element={ <TermsCondition/> }/>{/* done */}
<Route path='/help' element={ <Help/>}/>
<Route path='/slider' element={ <Slide1/> }/>
<Route path='/recentquestion' element={ <RecentQuestion/> }/>
<Route path='/bumpquestion' element={ <BumpQuestion/> }/>{/* done */}
<Route path='/mostvisited' element={ <MostVisited/> }/>
<Route path='/mostanswered' element={ <MostAnswered/> }/>{/* done */}
<Route path='/company' element={ <Company/> }/>
<Route path="/:name" element={<CompanyProfile />}/>
<Route path="/apx" element={<Sector />} />
<Route path='/askquestion' element={ <AskQuestion/> }/>{/* done */}
<Route path='/userprofile' element={ <UserProfile/> }/>{/* done */}
<Route path='/question' element={ <UserQuestion/> }/>{/* done */}
<Route path='/ans' element={ <UserAnswer/> }/>{/* done */}
<Route path='/addgroup' element={ <AddGroup/> }/>{/* done */}
<Route path='/editgroup' element={ <EditGroup/> }/>{/* done */}
<Route path='/polls' element={ <Polls/> }/>{/* done */}
<Route path='/groupdetail/:id' element={ <GroupDetail/> }/>{/* done */}
<Route path='/postgroup' element={ <GroupPosts/> }/>{/* done */}
<Route path='/givenanswer' element={ <AnswersGiven/> }/>{/* done */}
<Route path='/analytics' element={ <Analytics/>}/>
<Route path="/comments/:commentId" element={<AnswerComponent/>} />

<Route path="/mostcommentsll" element={<MostCommented />} />
<Route path="/Summary" element={<Warn/>} />
{/* <Route path="/heatmap" element={<Heatmap/>} />
<Route path="/iteractivesummary" element={<InteractiveSummary/>} />
<Route path="/statesummary" element={<StateSummary/>} />
<Route path="/city&state" element={<CityState/>} />
<Route path="/industries" element={<Industry/>} />
 */}
 <Route path="/termandcondition" element={<TermsAndCondition />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/userpolicy" element={<UserPolicy />} />
          <Route path="/forget_password" element={<Forget />} />
          <Route path="/forgot-password" element={<Password />} />

          
    </Routes>
  
  </Router>
    </>
  );
}

export default App;
