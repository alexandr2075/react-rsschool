import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormCard from './FormComponents/FormCard/FormCard';
import './Form.css';

export type FormValues = {
  name: string;
  date: string;
  gender: string;
  country: string;
  avatar: string;
};

export default function FormHook() {
  const [formValues, setFormValues] = useState<FormValues[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.avatar = imageUrl;
    setFormValues([...formValues, data]);
    reset();
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>Name</label>
          <input {...register('name', { required: true, minLength: 4 })} />
          <p className="error-style">
            {errors.name && 'Please lengthen this text to 4 characters or more'}
          </p>
        </div>

        <div>
          <label>Date of birth:</label>
          <input type="date" {...register('date', { required: true })} />
          <p className="error-style">{errors.date && 'Date is required'}</p>
        </div>

        <fieldset>
          <legend>Gender:</legend>

          <div>
            <input type="radio" id="man" value="man" {...register('gender', { required: true })} />
            <label htmlFor="man">Man</label>
          </div>

          <div>
            <input
              type="radio"
              id="woman"
              value="woman"
              {...register('gender', { required: true })}
            />
            <label htmlFor="woman">Woman</label>
          </div>
          <p className="error-style">{errors.gender && 'Gender is required'}</p>
        </fieldset>

        <label>
          I live in a country:
          <select {...register('country', { required: true })}>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Russia">Russia</option>
            <option value="Armenia">Armenia</option>
            <option value="Georgia">Georgia</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
          </select>
        </label>
        <p className="error-style">{errors.country && 'Country is required'}</p>

        <div>
          <label>Select a file:</label>
          <input
            type="file"
            {...register('avatar', {
              required: 'File is required',
              onChange: (event) => {
                if (event.target.files?.[0]) {
                  const src = URL.createObjectURL(event.target.files[0]);
                  setImageUrl(src);
                }
              },
            })}
          />
          <p className="error-style">{errors.name && 'File is required'}</p>
        </div>
        <input type="submit" />
      </form>

      <div className="form-cards">
        {formValues.map((card, index) => {
          return (
            <FormCard
              key={index}
              src={card.avatar}
              name={card.name}
              birth={card.date}
              gender={card.gender}
              country={card.country}
            />
          );
        })}
      </div>
    </div>
  );
}
