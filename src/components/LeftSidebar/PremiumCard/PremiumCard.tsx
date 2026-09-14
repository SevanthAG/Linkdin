import { Layers } from "lucide-react";

import "./PremiumCard.css";

const PremiumCard = () => {
    return (
        <div className="premium-card">

            <p className="premium-text">
                Access exclusive tools & insights
            </p>

            <div className="premium-link">
                <Layers className="premium-icon" />

                <span>
                    Try Premium for ₹0
                </span>
            </div>

        </div>
    );
};

export default PremiumCard;