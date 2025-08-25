import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../../../ui/card'
import { User } from 'lucide-react'

const SettingsTab = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-2.5 items-center font-semibold text-xl">
                        <span><User/></span>
                        Settings
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsTab
