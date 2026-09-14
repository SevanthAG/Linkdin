import "./AnalyticsCard.css";

const AnalyticsCard = () => {
    return (
        <div className="analytics-card">

            <h3>
                Analytics
            </h3>

            <div className="analytics-items">

                <div className="analytics-item">
                    <span>Profile viewers</span>
                    <strong>69</strong>
                </div>

                <div className="analytics-item">
                    <span>Post impressions</span>
                    <strong>27</strong>
                </div>

            </div>

        </div>
    );
};

export default AnalyticsCard;