import './MainPage.css';
function MainPage({children}) {
    return (
        <div className="background-page">
            <div>
                {children}
            </div>
        </div>
    );    
    
}
export default MainPage;