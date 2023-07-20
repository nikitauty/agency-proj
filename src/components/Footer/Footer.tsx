import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { MoreInfoLink } from '@/ui/MoreInfoLink/MoreInfoLink';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="license">
				ЦИАН — база данных о недвижимости. Использование сайта означает согласие с Пользовательским
				соглашением и Политикой конфиденциальности ЦИАН. Оплачивая лицензионный платеж, вы
				принимаете Лицензионное соглашение.
			</div>
			<div className="info">
				<div className="footer__nav">
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
					<Link to="/" className="footer__nav">
						a
					</Link>
				</div>
				<img src={logo} alt="" />
				<div className="links">
					<a href="#">
						<img src="" alt="" />
					</a>
					<a href="#">
						<img src="" alt="" />
					</a>
					<a href="#">
						<img src="" alt="" />
					</a>
					<a href="#">
						<img src="" alt="" />
					</a>
				</div>
				<div className="apps">
					<MoreInfoLink
						src="https://www.youtube.com/watch?v=bk_5x2HHVUU"
						text="доступно в appstore"
					/>
					<MoreInfoLink
						src="https://www.youtube.com/watch?v=bk_5x2HHVUU"
						text="доступно в googleplay"
					/>
				</div>
			</div>
		</footer>
	);
};
