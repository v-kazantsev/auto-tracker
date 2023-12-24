import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('MODAL/OPEN');

const closeModal = createAction('MODAL/CLOSE');

export { openModal, closeModal };