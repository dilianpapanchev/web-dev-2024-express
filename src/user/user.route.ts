import express, { Request, Response } from 'express';
import { db } from '../database';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, universityId, subjectIds = [] } = req.body;
    const university = await db.models.University.findByPk(universityId);
    
    if (!university) {
      res.status(404).json({ error: 'University not found' });
      return;
    }

    if (await db.models.User.findOne({ where: { email } })) {
      throw new Error("User already exists.");
    }

    const user = await db.models.User.create({ name, email, universityId });

    const subjects = await db.models.Subject.findAll({ where: { id: subjectIds } });
    await user.addSubjects(subjects);

    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});


router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const subject = await db.models.Subject.findByPk(id);
    if (!subject) {
      res.status(404).json({ error: 'Subject not found' });
      return;
    }

    subject.name = name;
    await subject.save();

    res.status(200).json(subject);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await db.models.User.findAll({
      include: {
        model: db.models.University,
        as: 'university',
      },
    });
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;