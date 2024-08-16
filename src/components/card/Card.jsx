import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const navigate = useNavigate();

    const handleViewProduct = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="flex flex-col h-full rounded-lg shadow-xl bg-white overflow-hidden hover:scale-105 transition-transform duration-300 ease-out hover:ease-linear">
            <Link to={`/product/${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
                />
            </Link>
            <div className="flex-1 p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                    <span className="text-lg">⭐{product.rating}</span>
                    <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map(tag => (
                        <span 
                            key={tag} 
                            className="bg-gray-200 text-gray-700 text-sm py-1 px-2 rounded-full border border-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <button 
                className="w-full bg-red-500 text-white py-2 rounded-b-lg hover:bg-red-600 transition-colors"
                onClick={handleViewProduct}
                aria-label={`View details of ${product.name}`}
            >
                View product
            </button>
        </div>
    );
};

export default Card;