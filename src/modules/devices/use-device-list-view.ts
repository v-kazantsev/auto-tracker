import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { devicesSelector } from 'storage/slices/devices/selectors';
import { getDeviceListRoutine } from 'storage/slices/devices/actions';
import { modalSelector } from 'storage/slices/modal/selectors';
import { closeModal, openModal } from 'storage/slices/modal/actions';

export const useDeviceListView = () => {
  const { data, error, isLoading } = useSelector(devicesSelector);
  const modalOpen = useSelector(modalSelector);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeviceListRoutine())
  }, [dispatch]);
  const handleCloseModal = () => dispatch(closeModal());
  const handleOpenModal = () => dispatch(openModal());
  
  return { data, error, loading: isLoading, filter, setFilter, modalOpen, handleCloseModal, handleOpenModal };
};
