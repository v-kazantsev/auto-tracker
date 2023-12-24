import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { devicesSelector } from 'storage/slices/devices/selectors';
import { getDeviceListRoutine } from 'storage/slices/devices/actions';
import { modalSelector } from 'storage/slices/modal/selectors';
import { closeModal } from 'storage/slices/modal/actions';

export const useDeviceListView = () => {
  const { data, error, isLoading } = useSelector(devicesSelector);
  const open = useSelector(modalSelector);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDeviceListRoutine())
  }, [dispatch]);
  const handleCloseModal = () => dispatch(closeModal());
  
  return { data, error, loading: isLoading, filter, setFilter, modalOpen: open, handleCloseModal };
};
