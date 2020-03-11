/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import * as React from 'react'
import { InlineField } from './inline-field'
import { Wysiwyg } from 'react-tinacms-editor'

interface InlineWysiwygFieldProps {
  name: string
  sticky?: string
  children: any
}

export function InlineWysiwyg({
  name,
  sticky,
  children,
}: InlineWysiwygFieldProps) {
  return (
    <InlineField name={name}>
      {({ input, status }: any) => {
        if (status === 'active') {
          return <Wysiwyg sticky={sticky} input={input} />
        }
        return <>{children}</>
      }}
    </InlineField>
  )
}
