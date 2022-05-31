import React from 'react';
import InputCheckbox from '../../components/InputCheckbox';
import { FormData, Validations } from '../../types/form.type';

interface AgreementsProps {
  formData: FormData,
  setFormData: (formData: FormData) => void,
  isValid: Validations,
  setIsValid: (isValid: Validations) => void,
  showMessage: boolean,
}

const Agreements = ({
  formData, setFormData,
  isValid, setIsValid,
  showMessage,
}: AgreementsProps) => {
  return (
    <fieldset>
      <legend>약관 동의</legend>
      <InputCheckbox
        id='all'
        name='all'
        label='모두 동의합니다'
        checked={formData.isAllAgree}
        setChecked={(checked) => {
          setFormData({
            ...formData,
            isAllAgree: checked,
            isTermsAgree: checked,
            isPrivacyAgree: checked,
            isMarketingAgree: checked,
          });
        }}
      />
      <InputCheckbox
        id='terms'
        name='terms'
        label={<><a href='#'>이용약관</a>에 동의합니다(필수)</>}
        checked={formData.isTermsAgree}
        setChecked={(checked) => {
          setFormData({
            ...formData,
            isAllAgree: formData.isPrivacyAgree && formData.isMarketingAgree && checked,
            isTermsAgree: checked,
          });
        }}
        isValid={isValid.isTermsAgree}
        setIsValid={(valid) => setIsValid({ ...isValid, isTermsAgree: valid })}
        validation={(value) => value}
        validationMessage='필수 약관에 동의해주세요.'
        showMessage={showMessage}
        isRequired
      />
      <InputCheckbox
        id='privacy'
        name='privacy'
        label={<><a href='#'>개인정보 처리 방침</a>에 동의합니다(필수)</>}
        checked={formData.isPrivacyAgree}
        setChecked={(checked) => {
          setFormData({
            ...formData,
            isAllAgree: formData.isTermsAgree && formData.isMarketingAgree && checked,
            isPrivacyAgree: checked,
          });
        }}
        isValid={isValid.isPrivacyAgree}
        setIsValid={(valid) => setIsValid({ ...isValid, isPrivacyAgree: valid })}
        validation={(value) => value}
        validationMessage='필수 약관에 동의해주세요.'
        showMessage={showMessage}
        isRequired
      />
      <InputCheckbox
        id='marketing'
        name='marketing'
        label={["마케팅 메일 수신에 동의합니다(선택)"]}
        checked={formData.isMarketingAgree}
        setChecked={(checked) => {
          setFormData({
            ...formData,
            isAllAgree: formData.isTermsAgree && formData.isPrivacyAgree && checked,
            isMarketingAgree: checked,
          });
        }}
      />
      <div>
        <span>메일로 유용한 정보를 보내드려요!</span>
      </div>
    </fieldset>
  );
}

export default Agreements;
