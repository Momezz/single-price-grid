import './styles/component.css';
import './styles/App.css';

function SinglePriceGrid(){
    return (
    <section className="container">
        <div className="square1 square">
            <h1 className="title">Join our community</h1>
            <h2 className="second">30-day,hassle-free money back guarantee</h2>
            <p className="paragraph">Gain access to our full library of tutorials along width
                expert code reviews. Perfect for any developers who are serious about honing their skills.
            </p>
        </div>
        <div className="btn-cont">
            <div className="square2 square">
                <h2 className="square2_h2">Monthly Subscription</h2>
                <p className="number"><span className="price">$29</span>per month</p>
                <p className="text"> Full access for less than $1 a day</p>
                <button id="signUp">Sign Up</button>
            </div>
            <div className="square3 square">
                <h2>Why Us</h2>
                <ul className="list">
                    <li>Tutorials by industry experts Peer</li>
                    <li>Expert code review </li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </div>
        </div>
    </section>);     
}

export default SinglePriceGrid;