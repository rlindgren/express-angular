import { Router } from 'express';
const router = Router();

router.get('/list', (req, res) => {
  res.status(200).json({ data: [1, 2, 3, 4] });
});

router.get('/list2', (req, res) => {
  res.status(200).json({ data: [10, 20, 30, 40] });
});

router.get('/list3', (req, res) => {
  res.status(200).json({ data: [100, 200, 300, 400] });
});


router.use((req, res, error) => {
  res.status(404).json({ data: null, error: 'Not Found' });
})
export { router as index }
