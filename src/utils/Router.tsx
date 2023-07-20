import { Route, Routes } from 'react-router-dom';
import { THeaderFooter } from '@/templates/THeaderFooter';
import { Test } from '@/screens/test/Test';
import { Test2 } from '@/screens/test/Test2';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<THeaderFooter />}>
				<Route index element={<Test />} />
				<Route path="/about" element={<Test2 />} />
			</Route>
		</Routes>
	);
};
